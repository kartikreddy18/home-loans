import Image from "next/image";
import { Product } from "../../../typings";
import { ApplyButton } from "../Footer";
import { CheckBadgeIcon, XMarkIcon } from "@heroicons/react/24/outline";
import Faqs from "./Faqs";

export const getData = async (uuid: string) => {
  const res = await fetch(
    `https://api.ratecity.com.au/v2/home-loans?uuid=${uuid}`.toString(),
    {
      headers: {
        "Content-Type": "application/json",
        "x-api-key": `${process.env.API_KEY}`,
      },
    }
  );
  const data = await res.json();
  return data.hits.map(
    ({
      uuid,
      advertisedRate,
      applyUrl,
      companyLogo,
      comparisonRate,
      cons,
      faqs,
      name,
      pros,
    }: Product) => {
      return {
        uuid,
        advertisedRate,
        applyUrl,
        companyLogo,
        comparisonRate,
        cons,
        faqs,
        name,
        pros,
      };
    }
  );
};

export default async function Page({
  params: { uuid },
}: {
  params: { uuid: string };
}) {
  const data: Product[] = await getData(uuid);
  const {
    advertisedRate,
    applyUrl,
    companyLogo,
    comparisonRate,
    cons,
    faqs,
    name,
    pros,
  } = data[0];
  return (
    <div>
      <header className="grid place-items-center gap-1 sm:flex sm:justify-center">
        <Image
          src={`https:${companyLogo}`}
          alt=""
          width={120}
          height={120}
          priority
          className="w-auto h-auto"
        />
        <div className="grid place-items-center">
          <h2 className="font-semibold pb-2 text-center">{name}</h2>
          <div className="flex items-center justify-between px-10 py-1 border-t gap-5">
            <div className="grid place-items-center font-semibold">
              <h1>Advertised Rate</h1>
              <p className="text-gray-400">{advertisedRate}%</p>
            </div>
            <div className="border-r h-20" />
            <div className="grid place-items-center font-semibold">
              <h1>Comparison Rate</h1>
              <p className="text-gray-400">{comparisonRate}%</p>
            </div>
            <ApplyButton applyUrl={applyUrl} />
          </div>
        </div>
      </header>
      <main className="grid place-items-center gap-2 grid-cols-1 sm:grid-cols-2 pb-5">
        <div className="grid place-items-center">
          <h1 className="font-semibold border-b border-b-black after:border-b after:border-b-black after:absolute relative after:p-1 p-1 max-w-max grid place-items-center after:w-full after:bottom-1 after:right-1">
            Pros
          </h1>
          <div className="pt-2 grid place-items-center">
            {pros.map((str, index) => (
              <div key={index} className="flex space-x-2">
                <CheckBadgeIcon className="w-6 h-6 cursor-pointer text-green-500" />
                <p className="max-w-sm mx-auto text-center">{str}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="grid place-items-center">
          <h1 className="font-semibold border-b border-b-black after:border-b after:border-b-black after:absolute relative after:p-1 p-1 max-w-max grid place-items-center after:w-full after:bottom-1 after:right-1">
            Cons
          </h1>
          <div className="pt-2 grid place-items-center">
            {cons.map((str, index) => (
              <div key={index} className="flex space-x-2">
                <XMarkIcon className="w-6 h-6 cursor-pointer text-red-500" />
                <p className="max-w-sm mx-auto text-center">{str}</p>
              </div>
            ))}
          </div>
        </div>
      </main>
      <Faqs faqs={faqs} />
    </div>
  );
}
