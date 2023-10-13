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

      <div className={styles.homeText}>
        <h1 className={styles.title}>Welcome to the Rick and Morty App!</h1>
        <h3 className={styles.homeDescription}>
          Welcome to our exciting Rick and Morty application. Dive into the
          multiverse and explore the fascinating world of Rick, Morty, and their
          friends through our user-friendly interface. Discover intriguing
          characters, adventure-filled episodes, and out-of-this-world
          locations.
        </h3>
        <h3>With our app, you can:</h3>
        <ul>
          <li>
            <span className={styles.textStrong}>Explore Characters:</span>
            Get to know your favorite characters and discover interesting
            details about them.
          </li>
          <li>
            <span className={styles.textStrong}>Discover Episodes:</span>
            Immerse yourself in Rick and Morty's interdimensional escapades
            through a wide selection of episodes.
          </li>
          <li>
            <span className={styles.textStrong}>Investigate Locations:</span>
            Investigate Locations: Explore the weirdest and most wonderful
            places the multiverse has to offer.
          </li>
        </ul>

        <p>
          Have fun exploring, and enjoy a laughter-filled, fun-packed experience
          in our Rick and Morty universe!
        </p>
      </div>

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
