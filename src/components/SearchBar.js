import React, { useState } from "react";
import "./SearchBar.css";

export default function SearchBar(props) {
  const [searchTitle, setSearchTitle] = useState("");
  const [valid, setValid] = useState(false);

  const onChangeHandler = (event) => {
    if (event.target.value.trim().length > 0) {
      setValid(true);
      setSearchTitle(event.target.value);
    } else {
      setValid(false);
    }
  };

  const onSubmitHandler = (event) => {
    event.preventDefault();
    if (valid) {
      props.onSearch(searchTitle);
    }
  };
  let classBtn = "search-btn";
  if (!valid) {
    classBtn = "search-btn disable-btn";
  }

  return (
    <div className="search-bar">
      <form onSubmit={onSubmitHandler} className="search-form-controls">
        <input
          className="search-input"
          type="text"
          onChange={onChangeHandler}
          placeholder="Search Videos"
        />

        <button type="submit" className={classBtn}>
          <ion-icon name="search-outline"></ion-icon>
        </button>
      </form>
    </div>
  );
}
