import type { InferGetStaticPropsType, NextPage } from "next";
import React from "react";
import { env } from "../../env/server.mjs";
import type { Root } from "../../helpers/podcast.interface.js";
import type { FeedObj } from "../../helpers/podcasts.interface";

const Id: NextPage<InferGetStaticPropsType<typeof getStaticProps>> = ({
  singlePodcast,
}) => {
  const artistName = singlePodcast.results[0]?.artistName;
  const title = singlePodcast.results[0]?.collectionName;
  const image = singlePodcast.results[0]?.artworkUrl600;

  console.log(singlePodcast);
  return (
    <section className="flex items-center justify-center">
      <div>
        <a href="#" className="group relative block max-w-xs bg-black">
          <img
            alt={title}
            src={image}
            className="absolute inset-0 h-full w-full object-cover opacity-75 transition-opacity group-hover:opacity-50"
          />
          <div className="relative p-8">
            <p className="text-sm font-medium uppercase tracking-widest text-pink-500">
              {title}
            </p>
            <p className="text-2xl font-bold text-white">{artistName}</p>
            <div className="mt-64">
              <div className="translate-y-8 transform opacity-0 transition-all group-hover:translate-y-0 group-hover:opacity-100">
                <p className="text-sm text-white">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Omnis perferendis hic asperiores quibusdam quidem voluptates
                  doloremque reiciendis nostrum harum. Repudiandae?
                </p>
              </div>
            </div>
          </div>
        </a>
      </div>
      <div>Right</div>
    </section>
  );
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
