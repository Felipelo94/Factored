import React, { useState } from "react";
import styles from "./SearchComponent.module.css";
import Image from "next/image";
import SearchIcon from "../../assets/search-2-line.svg";

const SearchComponent = ({ onSearch }) => {
  const [searchQuery, setSearchQuery] = useState("");

  const handleInputChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const handleSearch = () => {
    onSearch(searchQuery);
  };

  return (
    <div className={styles.searchContainer}>
      <input
        type="text"
        value={searchQuery}
        onChange={handleInputChange}
        className={styles.searchInput}
        placeholder="Search..."
      />
      <button onClick={handleSearch} className={styles.searchBtn}>
        <Image src={SearchIcon} alt="searchIcon" width={18} height={18} />
      </button>
    </div>
  );
};

export default SearchComponent;
