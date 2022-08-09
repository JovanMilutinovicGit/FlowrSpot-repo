import Navbar from "./Navbar.js";
import HomePage from "./HomePage.js";
import Flowers from "./Flowers.js";
import LatestSightings from  "./LatestSightings.js"
import Favorites from "./Favorites.js"
import Modal from "./Modal.js";
import FlowerDetail from "./FlowerDetail.js";
import NewAccount from "./NewAccount.js";
import Login from "./Login.js"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import { useState } from "react";

const App = () => {

  const[isOpenNewAcc, setOpenNewAcc] = useState(false);
  const openModal = () => {
    setOpenNewAcc(true);
  }

  const[isOpenLogin, setOpenLogin] = useState(false);
  const openLogin = () => {
    setOpenLogin(true);
  }

  return (

    <div className="App">
      <Router >
      {isOpenNewAcc ? <Modal> <NewAccount/> </Modal>: null} 
       
       {isOpenLogin ? <Modal> <Login/> </Modal>:null}

        <Navbar
        openModal={openModal}
        openLogin={openLogin}
        />

        <Routes>
          <Route exact path='/' element={<HomePage/>}/>
          <Route exact path='/flowers' element={<Flowers/>}/>
          <Route exact path='/latestSightings' element={<LatestSightings/>}/>
          <Route exact path='/favorites' element={<Favorites/>}/>
          <Route exact path='/flowerDetail' element={<FlowerDetail/>}/>
        </Routes>
      </Router>
    </div>
  );
}
export default App;