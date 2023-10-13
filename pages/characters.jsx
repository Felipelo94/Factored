import React, { useEffect, useState } from "react";
import CharacterCard from "../components/CharacterCard/CharacterCard";
import axios from "axios";
import Layout from "../components/Layout/Layout";
import styles from "../components/MainCard/MainCard.module.css";
import Head from "next/head";
import Image from "next/image";
import Arrow from "../assets/arrow.svg";
import SearchComponent from "../components/SearchComponent/SearchComponent";

const Characters = () => {
  const [data, setData] = useState({});
  const [filteredData, setFilteredData] = useState([]);
  const [isFilter, setIsFilter] = useState(false);

  useEffect(() => {
    axios
      .get("https://rickandmortyapi.com/api/character/?page=1")
      .then((response) => {
        const apiData = response?.data;
        setData(apiData);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  async function getNextPage(next) {
    try {
      const response = await axios.get(next);
      setData(response.data);
    } catch (error) {
      console.error(error);
    }
  }

  const handleSearch = (query) => {
    if (filteredData !== "") {
      setIsFilter(true);
      const filteredResults = data.results.filter((item) =>
        item.name.toLowerCase().includes(query.toLowerCase())
      );
      setFilteredData(filteredResults);
    } else {
      () => setIsFilter(false);
      () => setFilteredData([]);
    }
  };

  return (
    <Layout>
      <Head>
        <title>Rick and Morty - Characters</title>
        <meta name="description" content="Rick and morty characters page" />
        <link rel="icon" href="/favicon.svg" />
      </Head>
      <div className={styles.search}>
        <>
          <SearchComponent onSearch={handleSearch} />
          {isFilter && (
            <button
              onClick={() => setIsFilter(false)}
              className={styles.backBtn}
            >
              Back to list
            </button>
          )}
        </>
      </div>

      <div className={styles.cardsContainer}>
        {!isFilter ? (
          data?.results?.map((character, index) => (
            <CharacterCard character={character} key={index} />
          ))
        ) : filteredData.length !== 0 ? (
          filteredData.map((character, index) => (
            <CharacterCard character={character} key={index} />
          ))
        ) : (
          <h2>There is no data related to the search</h2>
        )}
      </div>

      <div className={styles.btnContainer}>
        {data?.info?.prev !== null && !isFilter ? (
          <button
            onClick={() => getNextPage(`${data?.info.prev}`)}
            className={styles.btn}
          >
            <Image
              src={Arrow}
              alt="arrow-icon"
              width={24}
              height={24}
              className={styles.arrow}
            />
            Prev
          </button>
        ) : (
          <div className={styles.placeholderBtn}></div>
        )}

        {data?.info?.next !== null && !isFilter && (
          <button
            onClick={() => getNextPage(`${data?.info.next}`)}
            className={styles.btn}
          >
            Next
            <Image src={Arrow} alt="arrow-icon" width={24} height={24} />
          </button>
        )}
      </div>
    </Layout>
  );
};

export default Characters;
