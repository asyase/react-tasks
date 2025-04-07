import React from "react";
import WordTable from "../pages/WordTable";
import Header from "../components/Header/Header";  
import Footer from "../components/Footer/Footer";  
import Button from "../components/Button/Button";  
import WordCard from "../components//WordCard/WordCard";

import "./App.css";

const words = [
  { word: "Tere", translation: "Hello", example: "Tere, kuidas läheb?" },
  { word: "Aitäh", translation: "Thank you", example: "Aitäh abi eest!" },
  { word: "Palun", translation: "Please", example: "Palun anna mulle vett." }
];

function App() {
  return (
    <div>
      <Header /> 
      <h1>Word Table</h1>
      <WordTable words={words} />
      <Footer />
      <WordCard word="cat" translation="kass" />

    </div>
  );
}

export default App;
