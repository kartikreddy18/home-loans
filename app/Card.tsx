import { SVGProps } from "react";

export const Card = ({
  Icon,
  title,
  description,
  color,
}: {
  Icon: (
    props: SVGProps<SVGSVGElement> & {
      title?: string | undefined;
      titleId?: string | undefined;
    }
  ) => JSX.Element;
  title: string;
  description: string;
  color: string;
}) => {
  return (
    <div className="bg-white shadow-2xl p-2 max-w-max grid place-items-center rounded cursor-pointer">
      <div
        style={{
          backgroundColor: color,
        }}
        className="max-w-max p-5 rounded-full"
      >
        <Icon className={`w-6 h-6 ${title === "Apply" && "-rotate-45"}`} />
      </div>
      <h1 className="font-semibold text-lg">{title}</h1>
      <p className="mx-auto text-center w-80">{description}</p>
    </div>
  );
};
