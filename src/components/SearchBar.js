import React, { useState } from "react";
import "./SearchBar.css";

/*  
 const searchVideos = (url) => {
     fetch(url)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        const videos = data.items.map((item) => {
          return {
            id: Math.random().toString(),
            vid: item.id.videoId,
            title: item.snippet.title,
            publishedAt: item.snippet.publishedAt,
            channelTitle: item.snippet.channelTitle,
            description: item.snippet.description,
          };
        });
        setResults(videos);
        setVideo(videos[0]);
      });
  };

  const searchHandler = (keyword) => {
    if (keyword) {
      const url = `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q=${keyword}&key=${APIkey}`;
      searchVideos(url);
    }
  };

*/

export default function SearchBar() {
  const [searchTitle, setSearchTitle] = useState("");

  const onChangeHandler = (event) => {
    setSearchTitle(event.target.value);
  };

  const onSubmitHandler = (event) => {
    event.preventDefault();
    console.log(searchTitle);
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
