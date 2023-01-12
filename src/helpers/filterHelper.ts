import type { FeedObj } from "./podcasts.interface";

export function applySortFilter(podcast: FeedObj, query: string) {
  const arrayWithFullStringVal = podcast.feed.entry.map((el) => {
    return {
      ...el,
      fullString: `${el.title.label} ${el["im:artist"].label}`,
    };
  });

  return arrayWithFullStringVal.filter((el) =>
    el.fullString.toLowerCase().includes(query.toLowerCase())
  );
}
