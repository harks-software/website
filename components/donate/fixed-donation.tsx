import { useState } from "react";
import { CurrencyCode, currencyCodeToSymbol } from "@/utils/currency";
import CurrencyDropdown from "./currency-dropdown";

interface IFixedDonationProps {
  clientSecret: string;
  setClientSecret: (value: string) => void;
}

export default function FixedDonation({
  clientSecret,
  setClientSecret,
}: IFixedDonationProps) {
  const [amount, setAmount] = useState("");
  const [email, setEmail] = useState("");
  const [isProcessing, setIsProcessing] = useState(false);
  const [currency, setCurrency] = useState<CurrencyCode>("cad");
  const [message, setMessage] = useState("");

  const isEmail = (email: string) =>
    /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email);

  async function attemptCustomQuantity() {
    try {
      if (!Number(amount) || Number(amount) < 0.5 || Number(amount) >= 999999) {
        setMessage("Please enter a valid amount.");
        return;
      } else if (!email || !isEmail(email)) {
        setMessage("Please enter a valid email.");
        return;
      }
      setIsProcessing(true);
      fetch("/api/create-custom-payment-intent", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          amount: Number(amount),
          receipt_email: email,
          currency,
        }),
      })
        .then((res) => res.json())
        .then((data) => {
          setClientSecret(data.clientSecret);
          setIsProcessing(false);
        });
    } catch (error: any) {
      setIsProcessing(false);
      alert(error.message);
    }
  }

  return (
    <div className="bottom-0 left-0 sm:w-[350px] md:w-[600px]">
      <div className="flex flex-col gap-4">
        {message && (
          <div className="items-center bg-red-100 text-black text-sm font-bold px-4 py-3">
            {message}
          </div>
        )}
        <CurrencyDropdown currency={currency} setCurrency={setCurrency} />
        <div className="grid grid-cols-2 gap-3">
          {[14, 40, 72, 110].map((num) => (
            <button
              className={`border hover:bg-gray-200 ${
                amount === num.toString() ? "bg-gray-200" : "bg-white"
              } rounded-md border-gray-400 text-center w-full py-1`}
              key={num}
              onClick={() => setAmount(num.toString())}
            >
              {currencyCodeToSymbol(currency) + num}
            </button>
          ))}
        </div>
        <div className="flex">
          <input
            className="order-2 w-full py-2 pr-2 rounded-r-md rounded-l-none m-0 border-2 border-l-0  bg-gray-200 border-black peer focus:bg-transparent"
            placeholder="Amount"
            value={amount}
            onChange={(event) => setAmount(event.target.value)}
            type="text"
          />
          <p className="order-1 py-2 px-3 rounded-l-md border-r-0 border-2 bg-gray-200 border-black peer-focus:bg-transparent">
            {currencyCodeToSymbol(currency)}
          </p>
        </div>
        <input
          className="w-full py-2 px-2 rounded-md border-2  bg-gray-200 border-black"
          placeholder="Email Address"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          type="email"
        />
        <button
          className="shadow-[0_8px_20px_0_rgba(0,0,0,0.2)] rounded-full w-full text-sm bg-black py-3 text-md text-white hover:bg-gray.800 transition-all duration-200 ease-linear"
          onClick={attemptCustomQuantity}
        >
          {!isProcessing ? "Donate" : "Processing"}
        </button>
      </div>
    </div>
  );
}
