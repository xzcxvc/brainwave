import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import ButtonGradient from "./assets/svg/ButtonGradient";
import "./App.css";
import Button from "./components/Button";
import Header from "./components/Header";
import Hero from "./components/Hero";

const App = () => {
  return (
    <>
      <div className="pt-[4.75rem] lg:pt-[5.25rem] overflow-hidden">
        {/* <Button className="mt-20" href={"#login"}>
          Click me!
        </Button> */}
        <Header />
        <Hero />
      </div>
      <ButtonGradient />
    </>
  );
};

export default App;
