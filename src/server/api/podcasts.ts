import { env } from "../../env/server.mjs";
import type { FeedObj } from "../../interface.js";

const url = env.NEXT_PUBLIC_ITUNES_URL;

const getPodcasts = async () => {
  try {
    const response: Response = await fetch(url);
    const data: unknown = await response.json();

    return data as FeedObj;
  } catch (error) {
    console.error(error);
  }
};

export { getPodcasts };
