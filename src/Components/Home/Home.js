import React,{useContext} from "react";
import { GlobalContext } from "../AuthState/GlobalContext";
import Card from "../Card/Card";
import Header from "../Header/Header";
import Hero from "../HeroImg/Hero";
import Register from "../Register/Register";
const {value} = useContext(GlobalContext)

function Home() {
  return (
    <div className="MainHomeDiv">
      <div className="SubHomeDiv">
        <Header />
        <Hero />
        <Register />
        <Card />
      </div>
    </div>
  );
}

export default Home;
