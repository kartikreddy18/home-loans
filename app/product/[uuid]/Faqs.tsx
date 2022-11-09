"use client";
import { Faq } from "../../../typings";
import { PlusIcon, MinusIcon } from "@heroicons/react/24/outline";
import { useState } from "react";

export default function Faqs({ faqs }: { faqs: Faq[] }) {
  return (
    <div className="">
      <h1 className="font-semibold text-lg">FaQ's</h1>
      {faqs.map((faq, index) => (
        <FaqCard key={index} {...faq} />
      ))}
    </div>
  );
}

export const FaqCard = ({ header, body }: { header: string; body: string }) => {
  const [show, setShow] = useState(false);
  return (
    <div className="grid place-items-center border-b border-b-black hover:bg-gray-200">
      <div
        className="flex items-center justufy-between p-5 gap-5 cursor-pointer"
        onClick={() => setShow((show) => !show)}
      >
        <h1>{header}</h1>
        {show ? (
          <MinusIcon className="w-6 h-6" />
        ) : (
          <PlusIcon className="w-6 h-6" />
        )}
      </div>
      <div
        className={`${show ? "flex" : "hidden"} pb-5 duration-200 ease-linear`}
      >
        <p className="px-5">
          <span className="font-semibold pr-1">Ans:</span>
          {body}
        </p>
      </div>
    </div>
  );
};
