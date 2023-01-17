import type { AppProps } from "next/app";
import Head from "next/head";
import "../styles/global.css";

function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>OpenAI ChatGPT + NextJS</title>
        <meta charSet="utf-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <link rel="icon" href="/openai.svg" />
      </Head>
      <main>
        <Component {...pageProps} />
      </main>
    </>
  );
}

export default App;
