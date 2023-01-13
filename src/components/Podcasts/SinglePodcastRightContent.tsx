import React from "react";
import type { Result } from "../../helpers/podcast.interface";

interface Props {
  episodeLength: number;
  filteredEpisodes: Result[];
}

const parseDuration = (ms: number) => {
  const min = 0 | (ms / 1000 / 60);
  const sec = 0 | (ms / 1000) % 60;

  return `${min}:${sec}`;
};

const SinglePodcastRightContent = ({
  episodeLength,
  filteredEpisodes,
}: Props) => {
  console.log(filteredEpisodes);
  return (
    <div className="grow">
      <h3>Episodes {episodeLength}</h3>
      <div className="flex flex-col">
        <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="inline-block min-w-full py-2 sm:px-6 lg:px-8">
            <div className="overflow-hidden">
              <table className="min-w-full">
                <thead className="border-b bg-white">
                  <tr>
                    <th
                      scope="col"
                      className="px-6 py-4 text-left text-sm font-medium text-gray-900"
                    >
                      Title
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-4 text-left text-sm font-medium text-gray-900"
                    >
                      Date
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-4 text-left text-sm font-medium text-gray-900"
                    >
                      Duration
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {filteredEpisodes.map((el, i) => (
                    <tr
                      key={i}
                      className="border-b bg-white transition duration-300 ease-in-out hover:bg-gray-100"
                    >
                      <td className="whitespace-wrap px-6 py-4 text-sm font-medium text-gray-900">
                        {el.trackName}
                      </td>
                      <td className="whitespace-nowrap px-6 py-4 text-sm font-light text-gray-900">
                        {Date.parse(el.releaseDate)}
                      </td>
                      <td className="whitespace-nowrap px-6 py-4 text-sm font-light text-gray-900">
                        {parseDuration(el.trackTimeMillis)}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SinglePodcastRightContent;
