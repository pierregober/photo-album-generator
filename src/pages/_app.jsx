import { useEffect, useRef } from "react";
import { useRouter } from "next/router";

/** Vendors */
import Head from "next/head";

/** Custom CSS*/
import "@/styles/globals.css";

function usePrevious(value) {
  const ref = useRef();

  useEffect(() => {
    ref.current = value;
  }, [value]);

  return ref.current;
}

export default function App({ Component, pageProps }) {
  const router = useRouter();
  const previousPathname = usePrevious(router.pathname);

  return (
    <>
      <Head>
        <link
          rel="preconnect"
          href="https://api.slingacademy.com"
          crossOrigin={true}
        />
        <meta
          name="viewport"
          content="width=device-width, height=device-height, initial-scale=1"
        />
        <meta charset="utf-8" />
        <title>Front-End Engineer Candidate - Brainscape</title>
        <meta
          property="og:title"
          content="Front-End Engineer Candidate - Brainscape"
        />
        <meta
          name="description"
          content="Photo album generator with save and download capabilities"
        />
        <meta
          property="og:description"
          content="Photo album generator with save and download capabilities"
        />
        <meta
          property="twitter:description"
          content="Photo album generator with save and download capabilities"
        />
        <meta
          property="twitter:title"
          content="Front-End Engineer Candidate - Brainscape"
        />
        <meta property="og:type" content="website" />
        <meta content="yes" name="apple-mobile-web-app-capable" />
        <meta
          content="photo, best photo generator app, online photo albums, make photo albums"
          name="keywords"
        />
        <link
          href="https://photo-album-generator.netlify.app/"
          rel="canonical"
        />
        <link
          rel="shortcut icon"
          type="image/x-icon"
          href="/favicon.ico"
        ></link>
      </Head>
      <Component previousPathname={previousPathname} {...pageProps} />
    </>
  );
}
