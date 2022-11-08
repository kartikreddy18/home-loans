import Image from "next/image";
import { Product } from "../../../typings";
import { ApplyButton } from "../Footer";

export const getData = async (uuid: string) => {
  const res = await fetch(
    `https://api.ratecity.com.au/v2/home-loans?uuid=${uuid}`,
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
    <div className="-translate-y-10">
      <div className="grid place-items-center">
        <div className="bg-white shadow-lg p-5 max-w-max rounded">
          <Image
            src={`https:${companyLogo}`}
            alt=""
            width={100}
            height={100}
            priority
            className="w-auto h-auto"
          />
        </div>
        <div>
          <h1>{name}</h1>
          <div className="flex items-center justify-between gap-5 border-t p-1">
            <div className="grid place-items-center">
              <p>Advertised Rate</p>
              <p className="text-gray-400">{advertisedRate}%</p>
            </div>
            <div className="border-r h-10 " />
            <div className="grid place-items-center">
              <p>Comparison Rate</p>
              <p className="text-gray-400">{comparisonRate}%</p>
            </div>
          </div>
          <ApplyButton applyUrl={applyUrl} />
        </div>
        <div>
          <div>
            {pros.map((str, index) => (
              <p key={index}>{str}</p>
            ))}
          </div>
          <div>
            {cons.map((str, index) => (
              <p key={index}>{str}</p>
            ))}
          </div>
        </div>
        <div>
          {faqs.map(({ header, body }, index) => (
            <div key={index}>
              <h1>{header}</h1>
              <p>{body}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
