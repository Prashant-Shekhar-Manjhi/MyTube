import React, { useState } from "react";

import "./SearchBar.css";

export default function SearchBar(props) {
  const [searchTitle, setSearchTitle] = useState("");
  const [error, setError] = useState(true);

  const onChangeHandler = (event) => {
    setSearchTitle(event.target.value);
    setError(true);
  };

  const onSubmitHandler = (event) => {
    event.preventDefault();
    if (searchTitle) props.onSearch(searchTitle);
    else {
      setError(false);
    }
  };

  let inputField = (
    <input
      className="search-input"
      type="text"
      onChange={onChangeHandler}
      placeholder="Search Videos"
    />
  );
  if (!error) {
    inputField = (
      <input
        className="search-input error-input"
        type="text"
        onChange={onChangeHandler}
        placeholder="Search Videos"
      />
    );
  }

  return (
    <div className="search-bar">
      <form onSubmit={onSubmitHandler} className="search-form-controls">
        {inputField}
        <button type="submit" className="search-btn">
          <ion-icon name="search-outline"></ion-icon>
        </button>
      </form>
    </div>
  );
}
