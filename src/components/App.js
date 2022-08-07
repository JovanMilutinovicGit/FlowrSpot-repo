import Navbar from "./Navbar.js";
import HomePage from "./HomePage.js";
import Flowers from "./Flowers.js";
import LatestSightings from  "./LatestSightings.js"
import Favorites from "./Favorites.js"
import NewAccount from "./NewAccount.js";
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
      {isOpenNewAcc ? <NewAccount>
       <div className="form" >
            <h2>Create an Account</h2>
         <div className="nameAndSurname">
           <input placeholder="Name"/>
           <input placeholder="Surname"/>
          </div>
       <div className="others">
        <input placeholder="Date of Birth"/>
        <input placeholder="Email address"/>
        <input placeholder="Password" type="password"/>
        </div>
        <div className="btn">
        <button>Create Account</button>
        </div>
        <div className="cancel">
        <p>I don't want to register</p>
        </div>
       </div>
       </NewAccount>: null} 
       
       {isOpenLogin ? <NewAccount>
        <div className="formLogin" >
        <h2>Welcome back</h2>
          <div className="emailAndPass">
            <input placeholder="Email address"/>
            <input placeholder="Password" type="password"/>
          </div>
          <div className="btn">
          <button>Login to your Account</button>
          </div>
          <div>
            <p className="cancel">I don't want to login</p>
          </div>
        </div>

       </NewAccount>:null}

        <Navbar openModal={openModal}
                openLogin={openLogin}/>
        <Routes>
          <Route exact path='/' element={<HomePage/>}/>
          <Route exact path='/flowers' element={<Flowers/>}/>
          <Route exact path='/latestSightings' element={<LatestSightings/>}/>
          <Route exact path='/favorites' element={<Favorites/>}/>S
        </Routes>
      </Router>
    </div>
  );
}
export default App;