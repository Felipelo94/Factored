import Head from "next/head";

import Layout from "../components/Layout/Layout";
import MainCard from "../components/MainCard/MainCard";

import characterImage from "../assets/RandM.jpg";
import episodes from "../assets/RMtv.jpg";
import planets from "../assets/planets.webp";

import styles from "../components/MainCard/MainCard.module.css";

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>Rick and Morty</title>
        <meta name="description" content="Rick and morty page" />
        <link rel="icon" href="/favicon.svg" />
      </Head>

      <div className={styles.cardsContainer}>
        <MainCard
          image={characterImage}
          title={"Characters"}
          desc={"See all the characters in this page"}
          href={"/characters"}
        />
        <MainCard
          image={episodes}
          title={"Episodes"}
          desc={"See all the episodes in this page"}
          href={"/episodes"}
        />
        <MainCard
          image={planets}
          title={"Locations"}
          desc={"See all the locations in this page"}
          href={"/locations"}
        />
      </div>
    </Layout>
  );
}
