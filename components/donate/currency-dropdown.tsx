import { Fragment } from "react";
import { Menu, Transition } from "@headlessui/react";
import { BsChevronDown } from "react-icons/bs";
import { CurrencyCode } from "@/utils/currency";

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

const options: { currency: CurrencyCode }[] = [
  { currency: "aed" },
  { currency: "cad" },
  { currency: "gbp" },
  { currency: "usd" },
];

export default function CurrencyDropdown({
  currency,
  setCurrency,
}: {
  currency: CurrencyCode;
  setCurrency: (value: CurrencyCode) => void;
}) {
  return (
    <Menu as="div" className="relative inline-block text-left">
      <div>
        <Menu.Button className="inline-flex w-full rounded-md border border-gray-400 bg-white px-4 py-2 font-medium  text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-100">
          <div className="flex-grow text-left">{currency.toUpperCase()}</div>
          <BsChevronDown size={5} className="-mr-1" aria-hidden="true" />
        </Menu.Button>
      </div>

      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className="absolute right-0 z-10 mt-2 w-full origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
          <div className="py-1">
            {options.map((option) => (
              <Menu.Item key={option.currency}>
                {({ active }) => (
                  <button
                    type="submit"
                    className={classNames(
                      active ? "bg-gray-100 text-gray-900" : "text-gray-700",
                      "block w-full px-4 py-2 text-left font-normal",
                    )}
                    onClick={() => {
                      setCurrency(option.currency);
                    }}
                  >
                    {option.currency.toUpperCase()}
                  </button>
                )}
              </Menu.Item>
            ))}
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  );
}
