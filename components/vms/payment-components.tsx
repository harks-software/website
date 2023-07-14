import Image from "next/image";
import { montserrat } from "../../utils/fonts";
import React from "react";

interface IPaymentItemProps {
  title: string;
  description: string;
  details: string;
  image: string;
}

export function PaymentItem({
  title,
  description,
  details,
  image,
}: IPaymentItemProps) {
  return (
    <div
      className={`w-60 h-64 bg-gray.800 rounded-2xl my-4 mx-6 text-white ${montserrat.className}`}
    >
      <Image
        src={image}
        width={250}
        height={170}
        alt="VMS Item"
        className="rounded-t-2xl"
      />
      <div className="flex flex-col justify-center">
        <h4 className="text-center text-xs my-2">{title}</h4>
        <h5 className="font-bold text-center mb-1">{description}</h5>
        <p className="text-xs text-center">{details}</p>
      </div>
    </div>
  );
}
