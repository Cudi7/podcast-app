import React from "react";
import type { FeedObj } from "../../podcasts.interface";
import Podcast from "./Podcast";

interface PodcastsProps {
  data: FeedObj | undefined;
}

const Podcasts = ({ data }: PodcastsProps) => {
  return (
    <div className="mt-20  grid grid-cols-4 gap-4">
      {data
        ? data.feed.entry.map((el) => <Podcast key={el.id.label} el={el} />)
        : null}
    </div>
  );
};

export default Podcasts;
