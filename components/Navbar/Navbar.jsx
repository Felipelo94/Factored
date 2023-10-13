import Image from "next/image";
import React from "react";
import Logo from "../../assets/LogoA.svg";
import styles from "./Navbar.module.css";
import Link from "next/link";

const Navbar = () => {
  return (
    <div className={styles.wrapper}>
      <Link href={"/"}>
        <Image src={Logo} alt="Page logo" width={220} height={65} />
      </Link>

      <ul className={styles.links}>
        <Link className={styles.link} href={"/"}>
          Home
        </Link>
        <Link className={styles.link} href={"/characters"}>
          Characters
        </Link>
        <Link className={styles.link} href={"/episodes"}>
          Episodes
        </Link>
        <Link className={styles.link} href={"/locations"}>
          Locations
        </Link>
      </ul>
    </div>
  );
};

export default Navbar;
