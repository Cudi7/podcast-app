import type { InferGetStaticPropsType, NextPage } from "next";
import React from "react";
import { env } from "../../env/server.mjs";
import type { Root } from "../../podcast.interface.js";
import type { FeedObj } from "../../podcasts.interface";

const Id: NextPage<InferGetStaticPropsType<typeof getStaticProps>> = ({
  singlePodcast,
}) => {
  return <div>{singlePodcast.results[0]?.artistName}</div>;
};

export default Id;

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

  const res = await fetch(`${env.NEXT_PUBLIC_ITUNES_SINGLE_URL}${id}`);
  const data: unknown = await res.json();

  return {
    props: { singlePodcast: data as Root },
  };
}
