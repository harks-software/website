import { useState } from "react";
import { CurrencyCode, currencyCodeToSymbol } from "@/utils/currency";
import CurrencyDropdown from "./currency-dropdown";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";

const currencyOptions: { currency: CurrencyCode }[] = [
  { currency: "aed" },
  { currency: "cad" },
  { currency: "gbp" },
  { currency: "usd" },
];

interface IFixedDonationProps {
  clientSecret: string;
  setClientSecret: (value: string) => void;
  amount: string;
  setAmount: (value: string) => void;
  currency: CurrencyCode;
  setCurrency: (value: CurrencyCode) => void;
}

export default function FixedDonation({
  clientSecret,
  setClientSecret,
  amount,
  setAmount,
  currency,
  setCurrency,
}: IFixedDonationProps) {
  const [isCustomAmount, setIsCustomAmount] = useState(true);
  const [email, setEmail] = useState("");
  const [isProcessing, setIsProcessing] = useState(false);
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
    <div className="rounded-lg bg-gradient-to-b from-red.500 via-orange.500 to-yellow.500 p-2">
      <div className="pb-4 text-center font-bold text-white">Choose Amount</div>
      <div className="rounded-md bg-cream p-3">
        <div className="bottom-0 left-0">
          <div className="flex flex-auto flex-col gap-4">
            <div className="text-center">
              How much would you like to donate?
            </div>
            {message && (
              <div className="items-center bg-red-100 px-4 py-3 text-sm font-bold text-black">
                {message}
              </div>
            )}

            <div className="grid grid-cols-2 gap-3 xl:grid-cols-3">
              {[14, 40, 72, 110, 313].map((num) => (
                <button
                  className={`h-[64px] w-full rounded-md border-4 border-red.500 py-1 text-center font-bold transition-all duration-200 ease-linear ${
                    amount === num.toString() && !isCustomAmount
                      ? "text-red.500"
                      : "bg-red.500 text-white"
                  } hover:bg-cream hover:text-red.500`}
                  key={num}
                  onClick={() => {
                    setAmount(num.toString());
                    setIsCustomAmount(false);
                  }}
                >
                  {currencyCodeToSymbol(currency) + num}
                </button>
              ))}
              <button
                className={`h-[64px] w-full rounded-md border-4 border-red.500 py-1 text-center font-bold transition-all duration-200 ease-linear ${
                  isCustomAmount ? "text-red.500" : "bg-red.500 text-white"
                } hover:bg-cream hover:text-red.500`}
                onClick={() => setIsCustomAmount(true)}
              >
                Custom Amount
              </button>
            </div>

            <div>
              <label>Or enter a custom amount:</label>
              <div className="flex">
                <input
                  className="peer order-3 m-0 w-full rounded-l-none rounded-r-md border-2 border-l-0 border-black bg-white py-2 pl-2 pr-2"
                  placeholder="Amount"
                  value={amount}
                  onClick={() => setIsCustomAmount(true)}
                  onChange={(event) => setAmount(event.target.value)}
                  type="text"
                />

                <div className="border-r-1 peer order-1 rounded-l-md border-2 border-black bg-white">
                  <div className="flex h-full items-center">
                    <label htmlFor="currency" className="sr-only">
                      Currency
                    </label>
                    <select
                      id="currency"
                      name="currency"
                      className="h-full rounded-md border-0 bg-transparent px-3 py-2 pl-2 pr-7 sm:text-sm"
                      onChange={(event) => {
                        setCurrency(event.target.value as CurrencyCode);
                      }}
                      value={currency}
                    >
                      {currencyOptions.map((option) => {
                        return (
                          <option key={option.currency} value={option.currency}>
                            {option.currency.toUpperCase()}
                          </option>
                        );
                      })}
                    </select>
                  </div>
                </div>
                <p className="peer order-2 border-2 border-x-0 border-black bg-white px-3 py-2">
                  {currencyCodeToSymbol(currency)}
                </p>
              </div>
            </div>

            <div>
              <label>Email Address:</label>
              <input
                className="w-full rounded-md border-2 border-black bg-white px-2 py-2"
                placeholder="Email Address"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                type="email"
              />
            </div>
            {/** TODO: Add checkboxes for 'Help cover the transaction cost' and 'recurring donation' */}
            <div className="flex justify-end">
              <button
                className="rounded-md border-4 border-red.500 bg-red.500 p-2 text-sm font-bold text-white shadow-[0_8px_20px_0_rgba(0,0,0,0.2)] transition-all duration-200 ease-linear hover:bg-cream hover:text-red.500"
                onClick={attemptCustomQuantity}
                disabled={isProcessing}
              >
                {!isProcessing ? (
                  <div className="items-middle">
                    <span className="inline">Continue to payment</span>
                    <BsChevronRight
                      size={12}
                      className="-mr-1 ml-3 inline"
                      aria-hidden="true"
                      stroke-width="2"
                    />
                  </div>
                ) : (
                  <span>Processing</span>
                )}
              </button>
            </div>
          </div>
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
