import React from "react";
import type { FeedObj } from "../../interface";
import Podcast from "./Podcast";

interface PodcastsProps {
  data: FeedObj | undefined;
}

const Podcasts = ({ data }: PodcastsProps) => {
  return (
    <div>
      {data
        ? data.feed.entry.map((el) => <Podcast key={el.id.label} el={el} />)
        : null}
    </div>
  );
};

export default Podcasts;
