import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>Next JS</title>
        <meta name="description" content="Learning Next.js." />
      </Head>
      <div>
        <h1 className="text-4xl font-bold text-center my-10">
          Welcome to the Home Page
        </h1>
      </div>
    </>
  );
}
