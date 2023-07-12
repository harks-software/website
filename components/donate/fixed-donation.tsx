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
          <div className="items-center bg-red-100 px-4 py-3 text-sm font-bold text-black">
            {message}
          </div>
        )}
        <CurrencyDropdown currency={currency} setCurrency={setCurrency} />
        <div className="grid grid-cols-2 gap-3">
          {[14, 40, 72, 110].map((num) => (
            <button
              className={`border hover:bg-gray-200 ${
                amount === num.toString() ? "bg-gray-200" : "bg-white"
              } w-full rounded-md border-gray-400 py-1 text-center`}
              key={num}
              onClick={() => setAmount(num.toString())}
            >
              {currencyCodeToSymbol(currency) + num}
            </button>
          ))}
        </div>
        <div className="flex">
          <input
            className="peer order-2 m-0 w-full rounded-r-md rounded-l-none border-2 border-l-0 border-black  bg-gray-200 py-2 pr-2 focus:bg-transparent"
            placeholder="Amount"
            value={amount}
            onChange={(event) => setAmount(event.target.value)}
            type="text"
          />
          <p className="order-1 rounded-l-md border-2 border-r-0 border-black bg-gray-200 py-2 px-3 peer-focus:bg-transparent">
            {currencyCodeToSymbol(currency)}
          </p>
        </div>
        <input
          className="w-full rounded-md border-2 border-black bg-gray-200  py-2 px-2"
          placeholder="Email Address"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          type="email"
        />
        <button
          className="text-md w-full rounded-full bg-black py-3 text-sm text-white shadow-[0_8px_20px_0_rgba(0,0,0,0.2)] transition-all duration-200 ease-linear hover:bg-gray.800"
          onClick={attemptCustomQuantity}
        >
          {!isProcessing ? "Donate" : "Processing"}
        </button>
      </div>
    </div>
  );
}
