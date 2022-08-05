import Navbar from "./Navbar.js";
import Flowers from "./Flowers.js";
import LatestSightings from  "./LatestSightings.js"
import Favorites from "./Favorites.js"
import Login from "./Login.js";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

const App = () => {
  return (
    <div className="App">
      <Router>
        <Navbar/>
        <Routes>
          <Route exact path='/' element={<Flowers/>}/>
          <Route exact path='/flowers' element={<Flowers/>}/>
          <Route exact path='/latestSightings' element={<LatestSightings/>}/>
          <Route exact path='/favorites' element={<Favorites/>}/>
          <Route exact path='/login' element={<Login/>}/>
        </Routes>
      </Router>
    </div>
  );
}
export default App;