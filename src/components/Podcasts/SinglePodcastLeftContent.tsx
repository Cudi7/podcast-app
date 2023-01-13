import React from "react";

interface Props {
  artistName: string | undefined;
  title: string | undefined;
  image: string | undefined;
}

const SinglePodcastLeftContent = ({ artistName, title, image }: Props) => {
  return (
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
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Omnis
                perferendis hic asperiores quibusdam quidem voluptates
                doloremque reiciendis nostrum harum. Repudiandae?
              </p>
            </div>
          </div>
        </div>
      </a>
    </div>
  );
};

export default SinglePodcastLeftContent;
