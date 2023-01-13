import { useRouter } from "next/router";
import React from "react";
import SinglePodcastLeftContent from "../../../../components/Podcasts/SinglePodcastLeftContent";

const EpisodeDetail = () => {
  const router = useRouter();
  const { description, audio, image, artist, title } = router.query;

  const leftSideProps = {
    artistName: artist as string,
    title: title as string,
    image: image as string,
  };
  return (
    <section className="   container mx-auto flex  justify-between gap-10  px-10 ">
      <SinglePodcastLeftContent {...leftSideProps} />
      <div>
        <div className="max-w-3xl">{description}</div>
        <audio autoPlay src={audio as string} controls />
      </div>
    </section>
  );
};

export default EpisodeDetail;
