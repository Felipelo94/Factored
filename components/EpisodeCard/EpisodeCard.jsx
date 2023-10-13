import Image from "next/image";
import React from "react";
import Vector from "../../assets/Vector.svg";
import styles from "./EpisodeCard.module.css";

const EpisodeCard = ({ episode }) => {
  return (
    <div className={styles.episodeCardContainer}>
      <Image src={Vector} width={40} height={40} alt="icon" />

      <p className={styles.cardText}>
        {episode.name} | {episode.episode}
      </p>
    </div>
  );
};

export default EpisodeCard;
