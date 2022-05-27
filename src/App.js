import React, { useState, useEffect } from "react";
import "./assets/css/veriables.css";
import "./assets/css/app.css";
import "./assets/css/buy.css";
import "./assets/css/navbar.css";
import "antd/dist/antd.css";
import "./assets/css/responsive.css";
import Navbar from "./Components/Layout/Navbar";
import Footer from "./Components/Layout/Footer";
import Buy from "./Pages/Buy";
import SignIn from "./Pages/SignIn";
import Token from "./Pages/Token";
import Cryptoloria from "./Pages/Cryptoloria";
import Explore from "./Pages/Explore";
import Collection from "./Pages/Collection";
import User from "./Pages/User";
import UpcomingCollections from "./Pages/UpcomingCollections";
import TokenPage from "./Pages/TokenPage";
import Home from "./Pages/Home";
import CreateCollectible from "./Pages/CreateCollectible";
import CreateCollectibleSingle from "./Pages/CreateCollectibleSingle";
import CreateCollectibleMulti from "./Pages/CreateCollectibleMulti";
import Profile from "./Pages/Profile";
import Faq from "./Pages/Faq";
import Activity from "./Pages/Activity";
import Following from "./Pages/Following";
import Search from "./Pages/Search";
import CreateCollectibleEdit from "./Pages/CreateCollectibleEdit";
import "swiper/swiper-bundle.css";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
// import AnnBnnaer from "./Components/Popup/AnnBnnaer";

const App = () => {
  const [pImage, setpImage] = useState("");
  console.log("pImage", pImage);
  const profileImage = React.useRef(null);
  const handleprofilepicUploadr = (e) => {
    const [file] = e.target.files;
    if (file) {
      const reader = new FileReader();
      const { current } = profileImage;
      current.file = file;
      reader.onload = (e) => {
        current.src = e.target.result;
        setpImage(current.src);
      };
      reader.readAsDataURL(file);
    }
  };

  const [isAuthenticated, setIsAuthenticated] = useState(false);
  useEffect(() => {
    if (sessionStorage.getItem("apiToken")) {
      setIsAuthenticated(true);
    }
  }, []);

  /*function withProps(Component, props) {
    return function (matchProps) {
      return <Component {...props} {...matchProps} />;
    };
  }*/

  return (
    <>
      <Router>
        <Navbar
          handleprofilepicUploadr={(e) => handleprofilepicUploadr(e)}
          profileImage={profileImage}
        />
        <Switch>
          <Route path="/" component={Home} exact />
          <Route path="/cryptoloria" component={Cryptoloria} exact />
          <Route path="/explore" component={Explore} exact />
          <Route path="/buy/:collectibleId" component={Buy} exact />
          <Route path="/collection/:collectionId" component={Collection} exact />
          <Route path="/user/:user_id" component={User} exact />
          <Route
            path="/signIn"
            render={(props) => {
              if (isAuthenticated === false) {
                return <SignIn {...props} />;
              } else {
                return (
                  <Redirect
                    to={{
                      pathname: "/",
                    }}
                  />
                );
              }
            }}
          />
          <Route path="/neum" component={TokenPage} exact />
          <Route
            path="/upcoming-collections"
            component={UpcomingCollections}
            exact
          />
          <Route path="/token" component={Token} exact />
          <Route path="/create" component={CreateCollectible} exact />
          <Route
            path="/create-single"
            component={CreateCollectibleSingle}
            exact
          />
          <Route
            path="/create-multiple"
            component={CreateCollectibleMulti}
            exact
          />
          <Route
            path="/profile"
            render={(props) => {
              if (isAuthenticated === true) {
                return <Profile {...props} />;
              } else {
                return (
                  <Redirect
                    to={{
                      pathname: "/signin",
                    }}
                  />
                );
              }
            }}
          />
          {/*<Route path="/profile" component={withProps(Profile,{pImage: pImage})}   exact /> */}
          <Route path="/faq" component={Faq} exact />
          <Route
            path="/edit-profile"
            render={(props) => {
              if (isAuthenticated === true) {
                return <CreateCollectibleEdit {...props} />;
              } else {
                return (
                  <Redirect
                    to={{
                      pathname: "/signin",
                    }}
                  />
                );
              }
            }}
          />
          {/*<Route path="/edit-profile" component={CreateCollectibleEdit} exact />*/}
          <Route path="/activity" component={Activity} exact />
          <Route path="/following" component={Following} exact />
          <Route path="/search/:keyword" component={Search} exact />
        </Switch>
        <Footer />
      </Router>
    </>
  );
};

export default App;
