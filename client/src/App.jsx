import { useState } from "react";
import reactLogo from "./assets/react.svg";
import { Route, Routes } from "react-router-dom";
import NavBar from "./components/nav";
import MainPageCard from "./components/mainpagecard";
import Footer from "./components/footer";
import Login from "./components/login";
import AboutUs from "./components/aboutus";
import EcSoe from "./components/ecsoe";
import SOL from "./components/sol";
import SOM from "./components/som";
import IMSOE from "./components/imsoe";
import ProfDetail from "./components/profDetail";
import RateProf from "./components/rating";
import { lazy, Suspense } from "react"


function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      
      <NavBar></NavBar>
      {/* <MainPageCard></MainPageCard> */}
      <Routes>
        <Route path="/profs/:userId/review" element={<RateProf/>}/>
        <Route path="/profs/:userId" element={<ProfDetail/>}/>
        <Route path="/schoolofmanagement" element={<SOM/>} />
        <Route path="/schoolofeducation" element={<IMSOE/>} />
        <Route path="/schoolofengineering" element={<EcSoe/>} />
        <Route path="/schooloflaw" element={<SOL/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/aboutus" element={<AboutUs/>} />
        <Route path="/" element={<MainPageCard/>}/>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
