import Head from "next/head";
import {NavBar} from '../components/navBar'

export default function Home() {
  return (
      <>
        <Head>
          <title>Agusta Hospital</title>
          <link rel="icon" href="/favicon.ico"/>
        </Head>


        <NavBar/>

        <main className="container mx-auto">
          <div>test</div>
          <div>test</div>
          <div>test</div>
        </main>

        <footer className="flex items-center justify-center w-full h-24 border-t">
          <a
              className="flex items-center justify-center"
              href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
              target="_blank"
              rel="noopener noreferrer"
          >
            Powered by{" "}
            <img src="/vercel.svg" alt="Vercel Logo" className="h-4 ml-2"/>
          </a>
        </footer>
      </>
  );
}
