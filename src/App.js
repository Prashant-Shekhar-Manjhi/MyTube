import React, {Suspense } from "react";
import Home from "./pages/Home/Home";
import WatchVideo from "./pages/watchVideo/WatchVideo";
import "./App.css";
import { Fragment } from "react";
import { Route, Switch} from "react-router-dom";
import Search from "./pages/search/Search";
import News from "./pages/news/News";
import Playlist from "./pages/playlist/Playlist";


// const Search = React.lazy(() => import("./pages/Search"));
// const News = React.lazy(() => import("./pages/News"));

function App() {

  return (
    <Fragment>
      <Switch>
        <Suspense fallback={<h2>Loading...</h2>}>
          <Route path="/" exact>
            <Home/>
          </Route>
          <Route path="/news">
            <News />
          </Route>
          <Route path="/search">
            <Search />
          </Route> 
          <Route path="/watch">
            <WatchVideo/>
          </Route>
          <Route path="/playlist">
            <Playlist/>
          </Route>
        </Suspense>
      </Switch>
    </Fragment>
  );
}
export default App;
