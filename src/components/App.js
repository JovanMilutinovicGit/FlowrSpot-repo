import Navbar from "./Navbar.js";
import HomePage from "./HomePage.js";
import Flowers from "./Flowers.js";
import LatestSightings from "./LatestSightings.js";
import Favorites from "./Favorites.js";
import Modal from "./Modal.js";
import FlowerDetail from "./FlowerDetail.js";
import NewAccount from "./NewAccount.js";
import Login from "./Login.js";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import { useState } from "react";
import NewSighting from "./NewSighting.js";
import Profile from "./Profile.js";

const App = () => {
  const [isOpenNewAcc, setOpenNewAcc] = useState(false);
  const openNewAcc = (boolean) => {
    setOpenNewAcc(boolean);
  };

  const [isOpenLogin, setOpenLogin] = useState(false);
  const openLogin = (boolean) => {
    setOpenLogin(boolean);
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
            <Login setCloseLogin={openLogin} />
          </Modal>
        )}

        {/*
        <Modal>
          <Profile />
        </Modal>
     */}
        <Navbar openModal={openNewAcc} openLogin={openLogin} />

        <Routes>
          <Route exact path="/" element={<HomePage />} />
          <Route exact path="/flowers" element={<Flowers />} />
          <Route exact path="/latestSightings" element={<LatestSightings />} />
          <Route exact path="/favorites" element={<Favorites />} />
          <Route exact path="/flowerDetail" element={<FlowerDetail />} />
          <Route exact path="/newSighting" element={<NewSighting />} />
          <Route exact path="./profile" element={<Profile />} />
        </Routes>
      </Router>
    </div>
  );
};
export default App;
