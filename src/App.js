import React, { useState } from 'react'
import './assets/css/veriables.css';
import './assets/css/app.css';
import './assets/css/buy.css';
import './assets/css/navbar.css';
import 'antd/dist/antd.css';
import './assets/css/responsive.css';
import Navbar from './Components/Layout/Navbar';
import Footer from './Components/Layout/Footer';
import Buy from './Pages/Buy';
import SignIn from './Pages/SignIn';
import Token from './Pages/Token';
import Cryptoloria from './Pages/Cryptoloria';
import Explore from './Pages/Explore';
import Collection from './Pages/Collection';
// import FullScreenImage from './Components/Popup/FullScreenImage';
// import CreateCollectibleMultiplePopup from './Components/Popup/CreateCollectibleMultiplePopup';
// import FinishedCollectiblePopup from './Components/Popup/FinishedCollectiblePopup';
// import PlaceABidFollowPopup from './Components/Popup/PlaceABidFollowPopup';
// import CoinConverPopup from './Components/Popup/CoinConverPopup';
import UpcomingCollections from './Pages/UpcomingCollections';
import TokenPage from './Pages/TokenPage';
import Home from './Pages/Home';
import CreateCollectible from './Pages/CreateCollectible';
import CreateCollectibleSingle from './Pages/CreateCollectibleSingle';
import CreateCollectibleMulti from './Pages/CreateCollectibleMulti';
import Profile from './Pages/Profile';
import Faq from './Pages/Faq';
import Activity from './Pages/Activity';
import Following from './Pages/Following';
import search from './Pages/search';
import CreateCollectibleEdit from './Pages/CreateCollectibleEdit';

import 'swiper/swiper-bundle.css';
import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";

const App = () => {
    const [pImage, setpImage] = useState('')
    const profileImage = React.useRef(null);
    const handleprofilepicUploadr = e => {
        const [file] = e.target.files;

        if (file) {

            const reader = new FileReader();
            const { current } = profileImage;
            current.file = file;
            reader.onload = e => {
                current.src = e.target.result;
                setpImage(current.src);
            };
            reader.readAsDataURL(file);
        }
    };

    function withProps(Component, props) {
        return function (matchProps) {
            return <Component {...props} {...matchProps} />
        }
    }
    return (
        <>
            <Router>
                <Navbar handleprofilepicUploadr={(e) => handleprofilepicUploadr(e)} profileImage={profileImage} />
                <Switch>
                    <Route path="/" component={Home} exact />
                    <Route path="/cryptoloria" component={Cryptoloria} exact />
                    <Route path="/explore" component={Explore} exact />
                    <Route path="/buy" component={Buy} exact />
                    <Route path="/collection" component={Collection} exact />
                    <Route path="/signIn" component={SignIn} exact />
                    <Route path="/neum" component={TokenPage} exact />
                    <Route path="/upcoming-collections" component={UpcomingCollections} exact />
                    <Route path="/token" component={Token} exact />
                    <Route path="/create" component={CreateCollectible} exact />
                    <Route path="/create-single" component={CreateCollectibleSingle} exact />
                    <Route path="/create-multiple" component={CreateCollectibleMulti} exact />
                    <Route path="/profile" component={withProps(Profile,{pImage: pImage})}   exact />
                    <Route path="/faq" component={Faq} exact />
                    <Route path="/edit-profile" component={CreateCollectibleEdit} exact />
                    <Route path="/activity" component={Activity} exact />
                    <Route path="/following" component={Following} exact />
                    <Route path="/search" component={search} exact />
                </Switch>
                <Footer />
            </Router>
        </>
    )
}

export default App
