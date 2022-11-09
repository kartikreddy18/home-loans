import { notFound } from "next/navigation";
import { ProductType } from "../../typings";
import { CardList } from "./Card";
import Footer from "./Footer";

export const getData = async (pageId: string) => {
  const res = await fetch(
    `https://api.ratecity.com.au/v2/home-loans?page=${pageId}`.toString(),
    {
      headers: {
        "Content-Type": "application/json",
        "x-api-key": `${process.env.API_KEY}`,
      },
      next: { revalidate: 60 },
    }
  );
  const data = await res.json();
  return {
    product: [
      ...data.hits.map(
        ({
          uuid,
          name,
          companyLogo,
          advertisedRate,
          comparisonRate,
          applyUrl,
        }: ProductType) => {
          return {
            uuid,
            name,
            companyLogo,
            advertisedRate,
            comparisonRate,
            applyUrl,
          };
        }
      ),
    ],
    pageCount: data.meta.pageCount,
  };
};

export default async function Product({
  searchParams: { pageId = "1" },
}: {
  searchParams: { pageId: string };
}) {
  if (!Number(pageId)) return notFound();
  const data = await getData(pageId);
  const { product, pageCount } = data;
  return (
    <div className="">
      <CardList product={product} />
      <Footer pageCount={pageCount} pageId={pageId} />
    </div>
  );
}
