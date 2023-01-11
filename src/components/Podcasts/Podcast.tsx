import type { Entry } from "../../interface";

const Podcast = ({ el }: { el: Entry }) => {
  return <div>{el.title.label}</div>;
};

export default Podcast;
