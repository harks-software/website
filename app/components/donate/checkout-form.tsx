import React, { useEffect, useState } from "react";
import {
  PaymentElement,
  useStripe,
  useElements,
} from "@stripe/react-stripe-js";
import { PaymentIntentResult } from "@stripe/stripe-js";
import { CurrencyCode, currencyCodeToSymbol } from "@/utils/currency";

interface ICheckoutFormProps {
  setClientSecret: (value: string) => void;
  amount: string;
  currency: CurrencyCode;
}

export default function CheckoutForm({
  setClientSecret,
  amount,
  currency,
}: ICheckoutFormProps) {
  const stripe = useStripe();
  const elements = useElements();

  const [message, setMessage] = useState<null | string>(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (!stripe) {
      return;
    }

    const clientSecret = new URLSearchParams(window.location.search).get(
      "payment_intent_client_secret",
    );

    if (!clientSecret) {
      return;
    }

    stripe
      .retrievePaymentIntent(clientSecret)
      .then(({ paymentIntent }: PaymentIntentResult) => {
        switch (paymentIntent?.status) {
          case "succeeded":
            break;
          case "processing":
            break;
          case "requires_payment_method":
            setMessage("Your payment was not successful, please try again.");
            break;
          default:
            setMessage("Something went wrong.");
            break;
        }
      });
  }, [stripe]);

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    if (!stripe || !elements) {
      // Stripe.js has not yet loaded.
      // Make sure to disable form submission until Stripe.js has loaded.
      return;
    }

    setIsLoading(true);

    const { error } = await stripe.confirmPayment({
      elements,
      confirmParams: {
        // Make sure to change this to your payment completion page
        return_url:
          window.location.protocol +
          "//" +
          window.location.host +
          "/donate/successful-donation",
      },
    });

    // This point will only be reached if there is an immediate error when
    // confirming the payment. Otherwise, your customer will be redirected to
    // your `return_url`. For some payment methods like iDEAL, your customer will
    // be redirected to an intermediate site first to authorize the payment, then
    // redirected to the `return_url`.
    if (error.type === "card_error" || error.type === "validation_error") {
      setMessage(error.message as string);
    } else {
      setMessage("An unexpected error occurred.");
    }

    setIsLoading(false);
  };

  return (
    <div className="rounded-lg bg-gradient-to-b from-red.500 via-orange.500 to-yellow.500 p-2">
      <div className="pb-4 text-center font-bold text-white">Make Payment</div>
      <div className="rounded-md bg-cream p-3">
        <div className="py-2">
          <a onClick={() => setClientSecret("")} className="underline">
            {" "}
            {"< back"}
          </a>
        </div>
        <div className="py-2">
          Please enter your card information to complete the transaction.
        </div>
        <div className="w-full">
          <form
            id="payment-form"
            onSubmit={handleSubmit}
            className="checkout-form flex flex-col gap-4"
          >
            {message && (
              <div className="items-center bg-red-100 px-4 py-3 text-sm font-bold text-black">
                {message}
              </div>
            )}
            <PaymentElement id="payment-element" />
            <div className="text-center">
              {" "}
              {/** TODO: monthly/yearly recurring donations */}
              You are making a one-time donation of{" "}
              <b>{currencyCodeToSymbol(currency) + amount}</b>
            </div>
            <div className="flex justify-center">
              <button
                disabled={isLoading || !stripe || !elements}
                id="submit"
                className="checkout-button rounded-md border-4 border-red.500 bg-red.500 p-2 text-sm font-bold text-white shadow-[0_8px_20px_0_rgba(0,0,0,0.2)] transition-all duration-200 ease-linear hover:bg-cream hover:text-red.500"
              >
                <span id="button-text">
                  {isLoading ? (
                    <div className="spinner" id="spinner"></div>
                  ) : (
                    "Donate"
                  )}
                </span>
              </button>
            </div>
          </form>
        </div>
      </div>
      <div className="flex items-center justify-center pt-2 text-xs">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="12"
          viewBox="0 0 448 512"
        >
          <path d="M400 224h-24v-72C376 68.2 307.8 0 224 0S72 68.2 72 152v72H48c-26.5 0-48 21.5-48 48v192c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V272c0-26.5-21.5-48-48-48zm-104 0H152v-72c0-39.7 32.3-72 72-72s72 32.3 72 72v72z" />
        </svg>
        <span className="pl-1">Secure donation</span>
      </div>
    </div>
  );
}
