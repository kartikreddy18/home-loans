import Image from "next/image";
import Link from "next/link";
import { ProductType } from "../../typings";
import { ApplyButton } from "./Footer";
import { ArrowTopRightOnSquareIcon } from "@heroicons/react/24/outline";

export const CardList = ({ product }: { product: ProductType[] }) => {
  return (
    <div className="grid place-items-center grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3 -translate-y-10 pb-20">
      {product.map((product, index) => (
        <Card key={index} {...product} />
      ))}
    </div>
  );
};

export const Card = ({
  uuid,
  name,
  comparisonRate,
  advertisedRate,
  companyLogo,
  applyUrl,
}: ProductType) => {
  return (
    <div className="bg-white shadow-xl p-2 grid place-items-center max-w-max gap-2 relative">
      <Link href={`/product/${uuid}`} className="absolute top-5 right-5">
        <ArrowTopRightOnSquareIcon className="w-6 h-6" />
      </Link>
      <div className="w-full h-20 grid place-items-center">
        <Image
          src={`https:${companyLogo}`}
          alt=""
          width={100}
          height={100}
          priority
          className="w-auto h-auto"
        />
      </div>
      <h1 className="font-semibold mx-auto text-center w-80">{name}</h1>
      <div className="flex items-center justify-between gap-5 border-t p-1 font-semibold">
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
      <div className="w-full flex items-center justify-end">
        <ApplyButton applyUrl={applyUrl} />
      </div>
    </div>
  );
};
