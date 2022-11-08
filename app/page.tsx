import Image from "next/image";
import Link from "next/link";
import {
  PaperAirplaneIcon,
  AdjustmentsHorizontalIcon,
  AcademicCapIcon,
} from "@heroicons/react/24/solid";
import { Card } from "./Card";

const cardProps = [
  {
    Icon: PaperAirplaneIcon,
    title: "Apply",
    description:
      "Fill out 1 simple application. There's no fee or obligation, and is won't impact your credict.",
    color: "#3b82f6",
  },
  {
    Icon: AdjustmentsHorizontalIcon,
    title: "Compare",
    description:
      "Explore small bussiness loan options from 75+ lenders. We'll help you choose the best one.",
    color: "#eab308",
  },
  {
    Icon: AcademicCapIcon,
    title: "Succeed",
    description:
      "Get the capital you need in as little as 24 hours so you can get back to running your bussiness.",
    color: "#22c55e",
  },
];

export default function Home() {
  return (
    <div className="pb-20 space-y-20 overflow-hidden">
      <div className="flex justify-between">
        <div className="px-10">
          <h1 className="p-5 mx-auto text-7xl font-semibold border-b max-w-max">
            Get a Home Loan the smart way
          </h1>
          <p className="p-5 mb-10 w-96">
            Find your cheapest loan in minutes then click to apply instantly,
            it&apos;s free and won&apos;t affect your credict score.
          </p>
          <Link
            href="/product"
            className="bg-blue-500 p-5 ml-5 rounded-lg font-medium text-white"
          >
            Compare Loan
          </Link>
        </div>
        <Image
          src="/home.webp"
          alt=""
          width={400}
          height={400}
          priority
          className="w-auto h-auto hidden lg:flex"
        />
      </div>
      <div className="flex items-center gap-5 overflow-x-scroll scrollbar-hide lg:justify-center">
        {cardProps.map(({ Icon, color, description, title }, index) => (
          <Card
            key={index}
            title={title}
            Icon={Icon}
            description={description}
            color={color}
          />
        ))}
      </div>
    </div>
  );
}
