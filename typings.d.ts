export type ProductType = {
  uuid: string;
  name: string;
  companyLogo: string;
  advertisedRate: number;
  comparisonRate: number;
  applyUrl: string;
  companyName: string;
};

type Faq = {
  header: string;
  body: string;
};

export interface Product extends ProductType {
  faqs: Faq[];
  pros: string[];
  cons: string[];
}
