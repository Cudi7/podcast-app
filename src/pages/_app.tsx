import { type AppType } from "next/dist/shared/lib/utils";
import Navbar from "../components/Navbar";
import { SearchProvider } from "../contexts/search.context";

import "../styles/globals.css";

const MyApp: AppType = ({ Component, pageProps }) => {
  return (
    <>
      <Navbar />
      <SearchProvider>
        <Component {...pageProps} />
      </SearchProvider>
    </>
  );
};

export default MyApp;
