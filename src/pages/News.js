import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import WatchVideo from "../components/WatchVideo";
import VideoList from "../components/VideoList";
import Header from "../components/Header";
import SearchBar from "../components/SearchBar";
import { Fragment } from "react";
const APIkey_youtube_search = process.env.REACT_APP_API_KEY_SEARCH_1;

export default function News() {
  const [results, setResults] = useState();
  const [video, setVideo] = useState({});
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(true);
  let history = useHistory();

  const onSearchHandler = (keyword) => {
    setLoading(true);
    history.push(`/search?keyword=${keyword}`);
  };

  const clickTitleHandler = (video) => {
    setLoading(true);
    setVideo(video);
  };

  const endHandler = () => {
    if (results.indexOf(video) === results.length - 1) {
      setVideo(results[0]);
    } else setVideo(results[results.indexOf(video) + 1]);
  };

  const readyHandler = () => {
    setLoading(false);
  };
  function fetchNews(APIkey) {
    const url = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet&id=W6lv5HJnJBA%2CBMRMPG2Ryw8%2CMN8p-Vrn6G0&key=${APIkey}`;
    fetch(url)
      .then((response) => {
        if (!response.ok) throw new Error(`${response.status} News not Found.`);
        return response.json();
      })
      .then((data) => {
        const filteredData = data.items.map((item) => {
          return {
            id: Math.random().toString(),
            title: item.snippet.channelTitle,
            desc: item.snippet.description,
            vid: item.id,
            publishedAt: item.snippet.publishedAt,
            channelTitle: `Live News`,
            imageURL: item.snippet.thumbnails.medium.url,
          };
        });

        setResults(filteredData);
        setVideo(filteredData[0]);
        setLoading(false);
      })
      .catch((error) => {
        setError(error);
        setLoading(false);
      });
  }

  useEffect(() => {
    fetchNews(APIkey_youtube_search);
  }, []);

  return (
    <Fragment>
      <Header isLoading={loading} />
      <SearchBar onSearch={onSearchHandler} />
      {results && !error && (
        <div className="content">
          <WatchVideo
            video={video}
            endHandler={endHandler}
            readyHandler={readyHandler}
          />
          <div className="searched-videos">
            <VideoList videoAPI={results} onClickTitle={clickTitleHandler} />
          </div>
        </div>
      )}
      {error && <p className="error">{`${error}`}</p>}
    </Fragment>
  );
}
