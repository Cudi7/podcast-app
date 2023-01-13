import type { InferGetStaticPropsType, NextPage } from "next";
import React from "react";
import SinglePodcastLeftContent from "../../../components/Podcasts/SinglePodcastLeftContent";
import SinglePodcastRightContent from "../../../components/Podcasts/SinglePodcastRightContent";
import { env } from "../../../env/server.mjs";
import type { Root } from "../../../helpers/podcast.interface.js";
import type { FeedObj } from "../../../helpers/podcasts.interface";

const PodcastDetails: NextPage<
  InferGetStaticPropsType<typeof getStaticProps>
> = ({ singlePodcast }) => {
  const artistName = singlePodcast.results[0]?.artistName;
  const title = singlePodcast.results[0]?.collectionName;
  const image = singlePodcast.results[0]?.artworkUrl600;

  const episodeLength = singlePodcast.resultCount - 1;

  const leftSideProps = {
    artistName,
    title,
    image,
  };

  const rightSideProps = {
    episodeLength,
    filteredEpisodes: singlePodcast.results.filter((el, i) => i !== 0),
    id: singlePodcast.results[0]?.trackId,
  };

  return (
    <section className="   container mx-auto flex  justify-between gap-10  px-10 ">
      <SinglePodcastLeftContent {...leftSideProps} />
      <SinglePodcastRightContent {...rightSideProps} />
    </section>
  );
};

export default PodcastDetails;

export async function getStaticPaths() {
  const res = await fetch(env.NEXT_PUBLIC_ITUNES_URL);

  const data: unknown = await res.json();

  const paths = (data as FeedObj).feed.entry.map((el) => {
    return {
      params: {
        id: el.id.attributes["im:id"].toString(),
      },
    };
  });

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps(context: { params: { id: string } }) {
  const id = context.params.id;

  const res = await fetch(
    `${env.NEXT_PUBLIC_ITUNES_SINGLE_URL}${id}&entity=podcastEpisode`
  );
  const data: unknown = await res.json();

  return {
    props: { singlePodcast: data as Root },
    revalidate: 86400, // In seconds
  };
}
