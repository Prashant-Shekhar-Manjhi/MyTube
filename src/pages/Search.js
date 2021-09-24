import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import { useEffect } from "react/cjs/react.development";
import VideoList from "../components/VideoList";
import Header from "../components/Header";
import { Fragment } from "react";
import WatchVideo from "../components/WatchVideo";

const APIkey_youtube_search_1 = "AIzaSyA5tO9GTE2eeYVJevuaZhtFhW_-FL1oA9s";
// const APIkey_youtube_search_2 = "AIzaSyAtTWostq1MsBKVBHh6HeQ2bX6y6xj8YyE";
export default function Search() {
  const [video, setVideo] = useState({});
  const [results, setResults] = useState();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const location = useLocation();
  const queryParam = new URLSearchParams(location.search);
  const query = queryParam.get("query");

  function searchVideo(keyword, APIkey) {
    const url = `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=15&q=${keyword}&type=video&key=${APIkey}`;
    fetch(url)
      .then((response) => {
        if (!response.ok)
          throw new Error(`${response.status} Videos not Found `);
        return response.json();
      })
      .then((data) => {
        const filterSearchedData = data.items.map((item) => {
          return {
            id: Math.random().toString(),
            title: item.snippet.title,
            desc: item.snippet.description,
            vid: item.id.videoId,
            publishedAt: item.snippet.publishedAt,
            channelTitle: item.snippet.channelTitle,
            imageURL: item.snippet.thumbnails.default.url,
          };
        });

        setResults(filterSearchedData);
        setVideo(filterSearchedData[0]);
        setLoading(false);
      })
      .catch((error) => {
        setError(error);
        setLoading(false);
      });
  }
  useEffect(() => {
    searchVideo(query, APIkey_youtube_search_1);
    setLoading(true);
  }, [query]);

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

  return (
    <Fragment>
      <Header isLoading={loading} />

      {results && !error && (
        <div className="content">
          <div className="searched-videos">
            <VideoList videoAPI={results} onClickTitle={clickTitleHandler} />
          </div>

          <WatchVideo
            video={video}
            endHandler={endHandler}
            readyHandler={readyHandler}
          />
        </div>
      )}
      {error && <p className="error">{`${error}`}</p>}
    </Fragment>
  );
}
