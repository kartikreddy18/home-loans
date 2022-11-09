"use client";
import { ArrowLeftIcon } from "@heroicons/react/24/outline";
import { useRouter } from "next/navigation";

export const Header = () => {
  const { back } = useRouter();
  return (
    <ArrowLeftIcon className="w-6 h-6 cursor-pointer" onClick={() => back()} />
  );
};
