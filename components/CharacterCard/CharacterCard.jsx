import Image from "next/image";
import React from "react";
import styles from "./CharacterCard.module.css";
import pulseIcon from "../../assets/pulse-line.svg";
import alienIcon from "../../assets/aliens-line.svg";
import planetIcon from "../../assets/planet-line.svg";
import placeHolder from "../../assets/place.jpg";

const CharacterCard = ({ character }) => {
  return (
    <div className={styles.cardContainer}>
      <Image
        src={character.image ? character.image : placeHolder}
        alt={character.name + character.id}
        width={300}
        height={200}
        className={styles.cardImg}
      />

      <div className={styles.character}>
        <h2 className={styles.status}>{character.name}</h2>
        <div className={styles.status}>
          <Image src={pulseIcon} alt="pulse icon" />
          <h3 className={styles.statusText}>{character.status}</h3>
        </div>
        <div className={styles.status}>
          <Image src={alienIcon} alt="alien icon" />
          <h3 className={styles.statusText}>{character.species}</h3>
        </div>
        <div className={styles.status}>
          <Image src={planetIcon} alt="planet icon" />
          <h3 className={styles.statusText}>{character.origin.name}</h3>
        </div>
      </div>
    </div>
  );
};

export default CharacterCard;
