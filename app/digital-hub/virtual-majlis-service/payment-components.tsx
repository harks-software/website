import Image from "next/image";
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
    <div className="my-4 mx-6 h-64 w-60 rounded-2xl bg-gray.800 text-white">
      <Image
        src={image}
        width={250}
        height={170}
        alt="VMS Item"
        className="rounded-t-2xl"
      />
      <div className="flex flex-col justify-center">
        <h4 className="my-2 text-center text-xs">{title}</h4>
        <h5 className="mb-1 text-center font-bold">{description}</h5>
        <p className="text-center text-xs">{details}</p>
      </div>
    </div>
  );
}
