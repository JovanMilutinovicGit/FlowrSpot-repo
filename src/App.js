import Navbar from "./pages/Navbar.js";
import HomePage from "./pages/HomePage.js";
import Flowers from "./pages/Flowers.js";
import LatestSightings from "./pages/LatestSightings.js";
import Favorites from "./pages/Favorites.js";
import Modal from "./components/Modal.js";
import FlowerDetail from "./pages/FlowerDetail.js";
import NewAccount from "./pages/NewAccount.js";
import Login from "./pages/Login.js";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./styles/App.css";
import { useState } from "react";
import NewSighting from "./pages/NewSighting.js";
import Profile from "./pages/Profile.js";
import User from "./pages/User.js";
import SightingDetail from "./pages/SightingDetail.js";

const App = () => {
  const [isOpenNewAcc, setOpenNewAcc] = useState(false);
  const [isOpenLogin, setOpenLogin] = useState(false);
  const [isLogin, setIsLogin] = useState(false);
  const [openProfile, setOpenProfile] = useState(false);

  /*Prikaz forme za registraciju*/

  const openNewAcc = (boolean) => {
    setOpenNewAcc(boolean);
  };

  /*Prikaz forme za prijavu*/

  const openLogin = (boolean) => {
    setOpenLogin(boolean);
  };

  /*Prikazivanje korisnika u desnom gornjem uglu nakon klika na dugme Login*/

  const setisLogin = (boolean) => {
    setIsLogin(boolean);
  };

  /*Prikazivanje profil modala kada se klikne na sliku*/

  const openProfileInfo = (boolean) => {
    setOpenProfile(boolean);
  };

  return (
    <div className="App">
      <Router>
        {isOpenNewAcc && (
          <Modal>
            <NewAccount setCloseNewAcc={openNewAcc} />
          </Modal>
        )}

        {isOpenLogin && (
          <Modal>
            <Login setCloseLogin={openLogin} setLogin={setisLogin} />
          </Modal>
        )}

        {openProfile && (
          <Modal>
            <Profile setCloseProfile={openProfileInfo} logout={setIsLogin} />
          </Modal>
        )}
        {/*<Modal>
          <Settings />
        </Modal>*/}
        <Navbar
          openModal={openNewAcc}
          openLogin={openLogin}
          setLogin={setisLogin}
          openProfile={openProfileInfo}
          logged={isLogin}
        />

        <Routes>
          <Route exact path="/" element={<HomePage />} />
          <Route exact path="/flowers" element={<Flowers />} />
          <Route exact path="/latestSightings" element={<LatestSightings />} />
          <Route exact path="/favorites" element={<Favorites />} />
          <Route exact path="/flowerDetail" element={<FlowerDetail />} />
          <Route exact path="/newSighting" element={<NewSighting />} />
          <Route exact path="/user" element={<User />} />
          <Route exact path="/sightingDetail" element={<SightingDetail />} />
        </Routes>
      </Router>
    </div>
  );
};
export default App;
