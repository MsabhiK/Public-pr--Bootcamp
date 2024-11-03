import { useParams } from "react-router";
import React from "react";   //Top of App.js
import { Routes, Route } from "react-router-dom";
import './App.css';

const Home = (props) => { 
  return (
    <div>
      <h1 style={{color: "red", background: "black"}}>WELCOME!!🤞</h1>
    </div>
    
  );
}

const Check_isNaN = (props) => {
  const { id } = useParams(); 
  if (isNaN(id)) { 
    return (
        <h1>The word is: { id }!</h1>
      );
      } else {
        return (
          <h1>The number is: { id }!</h1>
        );
      }
}

const Playground = (props) => {
  const { word } = useParams();
  const { color_word } = useParams(); 
  const { color_back } = useParams();

    return (
      <h1 style={{color: color_word, background: color_back }}>The word is: { word }!</h1>
      );
}


function App() {
  return (
    <div className="App">
      <div>
        <h1>Here REACT is ready🙋</h1>
      </div>
      
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/:id" element={<Check_isNaN />}/>
        <Route path="/:word/:color_word/:color_back" element={<Playground />}/>
      </Routes>
    </div>
  );
}

export default App;
