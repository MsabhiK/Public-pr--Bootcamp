//import './App.css';
import { useState } from "react";
import Todolist from './components/Todolist';

function App() {
  const [list, setList] = useState([]); //* Car => []  => setCar =>
    const addJob = (newJob) => {
      //* If NewCar is not array, we need to make in an array
      if(!Array.isArray(newJob)){
        newJob = [newJob];  //* If it's not array, convert it to array.
      }
      //* add each car
      setList((prevLists) => [...prevLists, ...newJob]);
      console.log("Job added successfully", newJob);
    };
  return (
    <div className="App">
      <Todolist addJob = {addJob} list = {list} />
    </div>
  );
}

export default App;
