import Link from "next/link";
import { env } from "../../env/server.mjs";
import type { Entry } from "../../helpers/podcasts.interface";

const Podcast = ({ el }: { el: Entry }) => {
  const detailsURL = env.NEXT_PUBLIC_ITUNES_SINGLE_URL;
  return (
    <Link href={`/podcast/${el.id.attributes["im:id"]}`}>
      <div className=" max-w-xs rounded-lg border border-gray-200 bg-white shadow-md ">
        <div className="flex flex-col items-center py-10">
          <img
            className="mb-3 h-24 w-24 rounded-full shadow-lg"
            src={el["im:image"][0]?.label}
            alt="Bonnie image"
          />
          <h5 className="mb-1 text-lg font-medium text-gray-900 ">
            {el.title.label
              .slice(0, el.title.label.indexOf(" - "))
              .toUpperCase()}
          </h5>
          <span className="text-sm text-gray-500 ">
            {`Author: ${el["im:artist"].label}`}
          </span>
        </div>
      </div>
    </Link>
  );
};

export default Podcast;
