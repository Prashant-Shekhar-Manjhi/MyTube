import React, { useState } from "react";

import "./SearchBar.css";

export default function SearchBar(props) {
  const [searchTitle, setSearchTitle] = useState("");

  const onChangeHandler = (event) => {
    setSearchTitle(event.target.value);
  };

  const onSubmitHandler = (event) => {
    event.preventDefault();
    props.onSearch(searchTitle);
  };

  return (
    <div className="search-bar">
      <form onSubmit={onSubmitHandler} className="search-form-controls">
        <input
          className="search-input"
          type="text"
          onChange={onChangeHandler}
          placeholder="Search Videos"
        />
        <button type="submit" className="search-btn">
          Search
        </button>
      </form>
    </div>
  );
}
