//import './App.css';
import { Routes, Route } from "react-router-dom";
import Main from "./components/Main";
import CreateAuthor from './components/CreateAuthor';
import UpdateAuthor from './components/UpdateAuthor';


function App() {
  return (
  
    <nav className="App light bg-light">
      <div className="navbar-brand" />
      <h1>Favorite Authors</h1>
      <Routes>
        <Route path='/' element={<Main />} />
        <Route path='/authors/create' element={<CreateAuthor />} />
        <Route path='/authors/:id/update' element={<UpdateAuthor />} />
      </Routes>
    </nav>
  );
}

export default App;


