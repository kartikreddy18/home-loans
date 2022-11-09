"use client";
import {
  ArrowLeftCircleIcon,
  ArrowRightCircleIcon,
} from "@heroicons/react/24/outline";
import { useRouter } from "next/navigation";
import { PaperAirplaneIcon } from "@heroicons/react/24/solid";

export default function Footer({
  pageCount,
  pageId,
}: {
  pageCount: number;
  pageId: string;
}) {
  const { push } = useRouter();
  return (
    <div className="fixed before:fixed before:bottom-0 before:left-0 before:w-full before:p-5 before:h-14 flex items-center before:bg-black before:opacity-20 before:blur-sm text-black bottom-5 left-0 w-full z-0">
      <div className="max-w-7xl mx-auto flex items-center space-x-2 z-40">
        <button
          disabled={Number(pageId) === 1}
          onClick={() => push(`/product?pageId=${Number(pageId) - 1}`)}
          className="disabled:cursor-not-allowed"
        >
          <ArrowLeftCircleIcon className="w-6 h-6" />
        </button>
        <p>{pageId}</p>
        <button
          disabled={Number(pageId) === pageCount}
          onClick={() => push(`/product?pageId=${Number(pageId) + 1}`)}
          className="disabled:cursor-not-allowed"
        >
          <ArrowRightCircleIcon className="w-6 h-6" />
        </button>
      </div>
    </div>
  );
}

export const ApplyButton = ({ applyUrl }: { applyUrl: string }) => {
  const { push } = useRouter();
  return (
    <button
      className="bg-blue-500 rounded-full p-5 -rotate-45"
      onClick={() => push(`https:${applyUrl}`)}
    >
      <PaperAirplaneIcon className="w-6 h-6" />
    </button>
  );
};
