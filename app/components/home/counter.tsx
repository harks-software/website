"use client";
import { useRef } from "react";
import { useCountUp } from "react-countup";

interface Props {
  className?: string;
  to: number;
}

export const CounterNumericDisplay = ({ className = "", to }: Props) => {
  const countUpRef = useRef(null);
  useCountUp({
    end: to,
    useEasing: true,
    enableScrollSpy: true,
    scrollSpyOnce: true,
    scrollSpyDelay: 400,
    suffix: "+",
    duration: 2,
    ref: countUpRef,
  });
  return (
    <div className={className}>
      <span ref={countUpRef} />{" "}
    </div>
  );
};
