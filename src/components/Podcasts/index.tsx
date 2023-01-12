import { useSearch } from "../../contexts/search.context";
import { applySortFilter } from "../../helpers/filterHelper";
import type { FeedObj } from "../../helpers/podcasts.interface";
import Podcast from "./Podcast";
import { useEffect, useMemo, useState } from "react";

interface PodcastsProps {
  data: FeedObj | undefined;
}

const Podcasts = ({ data }: PodcastsProps) => {
  const [currentPodcasts, setCurrentPodcasts] = useState<FeedObj | undefined>();
  const { filterName } = useSearch();

  useEffect(() => {
    if (!currentPodcasts) setCurrentPodcasts(data);
  }, [currentPodcasts, data]);

  const filteredPodcasts = useMemo(() => {
    return currentPodcasts ? applySortFilter(currentPodcasts, filterName) : [];
  }, [currentPodcasts, filterName]);
  console.log(filteredPodcasts);

  return (
    <div className="mt-20 grid grid-cols-4 gap-4">
      {data
        ? filteredPodcasts.map((el) => <Podcast key={el.id.label} el={el} />)
        : null}
    </div>
  );
};

export default Podcasts;
