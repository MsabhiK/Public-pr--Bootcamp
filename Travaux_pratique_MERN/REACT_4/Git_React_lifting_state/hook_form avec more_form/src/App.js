//import logo from './logo.svg';
import './App.css';
import HookForm from "./components/HookForm";

function App() {
  const createUser = (newUser) => {
    //* If NewCar is not array, we need to make in an array
    if(!Array.isArray(newUser)){
      newUser = [newUser];  //* If it's not array, convert it to array.
    }
  };
  
  
  return (
    <div className="App">
        <h1>Welcom in HOOK FORM:🙋</h1>
        <HookForm createUser = {createUser}/>
    </div>
  );
}

export default App;
