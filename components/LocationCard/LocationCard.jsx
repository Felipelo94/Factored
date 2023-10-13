import Image from "next/image";
import React from "react";
import Planet from "../../assets/planet-line.svg";
import styles from "./LocationCard.module.css";

const LocationCard = ({ location }) => {
  return (
    <div className={styles.locationCardContainer}>
      <Image
        src={Planet}
        alt="planet-icon"
        width={40}
        height={40}
        className={styles.icon}
      />
      <p>{location.name}</p>
      <p>{location.dimension}</p>
    </div>
  );
};

export default LocationCard;
