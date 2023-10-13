import Image from "next/image";
import React from "react";
import style from "./MainCard.module.css";
import Link from "next/link";

const MainCard = ({ image, title, desc, href }) => {
  return (
    <Link className={style.cardWrapper} href={href}>
      <Image
        src={image}
        alt="card-image"
        width={400}
        height={200}
        className={style.cardImage}
      />
      <h2 className={style.text}>{title}</h2>
      <h3 className={style.text}>{desc}</h3>
    </Link>
  );
};

export default MainCard;
