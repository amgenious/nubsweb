import Nav from "./Components/Nav";
import HomeIndex from "./Components/HomePage/HomeIndex";
import Footer from "./Components/Footer";
import AboutIndex from "./Components/AboutPage/AboutIndex";
import GalleryIndex from "./Components/GalleryPage/GalleryIndex";
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import WingsIndex from "./Components/WingsPage/WingsIndex";
import VideoIndex from "./Components/VideoPage/VideoIndex";
import { Helmet } from "react-helmet";


function App() {
  return (
    <Router>
    <div className="App">
    <Helmet>
                <meta charSet="utf-8" />
                <title>Nubs Uenr</title>
                <link rel="canonical" href="http://nubs-uenr.com" />
      </Helmet>
     <Nav />
    <div className="Content">
      <Switch>
      <Route exact path="/">
        <HomeIndex />
      </Route>
      <Route path="/about">
        <AboutIndex />
      </Route>
      <Route path="/gallery">
        <GalleryIndex />
      </Route>
      <Route path="/about">
        <AboutIndex />
      </Route>
      <Route path="/wing">
        <WingsIndex />
      </Route>
      <Route path="/video">
        <VideoIndex />
      </Route>
      </Switch>
    </div>
     <Footer />
    </div>
    </Router>
  );
}

export default App;
