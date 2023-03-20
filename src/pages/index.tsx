import Head from 'next/head';

export default function Home() {
  return (
    <>
      <Head>
        <title>InfoSpectrum Eos</title>
        <meta
          name="description"
          content="InfoSpectrum Eos"
        />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1"
        />
        <link
          rel="icon"
          href="/favicon.ico"
        />
      </Head>
      <main>
        <h1>Hello</h1>
        <button className="btn btn-primary">button</button>
      </main>
    </>
  );
}
