import { useEffect, useState } from "react";

import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from "./checkout-form";
import FixedDonation from "./fixed-donation";

const stripe = loadStripe(
  process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY as string,
);

export default function DonateComponent() {
  const [clientSecret, setClientSecret] = useState<string>("");
  const [success, setSuccess] = useState<boolean>(false);

  const appearance: { theme: "stripe"; variables: {} } = {
    theme: "stripe",
    variables: {
      fontFamily: "open sans, sans-serif",
      borderRadius: "0.375rem",
    },
  };

  const options = {
    clientSecret,
    appearance,
    fonts: [
      {
        family: "open sans",
        src: "url(https://static.parastorage.com/services/third-party/fonts/user-site-fonts/fonts/open-source/opensans-bold-webfont.eot)",
        weight: "700",
      },
    ],
  };

  useEffect(() => {
    window.addEventListener("message", (event) => {
      if (event.data == "DONATE_SUCCESS") {
        setSuccess(true);
        setClientSecret("");
      }
    });
  }, []);

  return (
    <div className="z-30">
      {success && clientSecret == "" && (
        <div className="items-center bg-green-100 text-black font-bold px-4 py-3 mt-4">
          Thank you for your donation!
        </div>
      )}
      {clientSecret ? (
        <Elements options={options} stripe={stripe}>
          <CheckoutForm setClientSecret={setClientSecret} />
        </Elements>
      ) : (
        <FixedDonation {...{ clientSecret, setClientSecret }} />
      )}
    </div>
  );
}
