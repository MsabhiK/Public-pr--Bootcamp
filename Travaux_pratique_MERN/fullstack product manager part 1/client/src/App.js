import './App.css';
import { Routes, Route, Link } from "react-router-dom";
import Main from "./components/Main";
import UpdateProduct from "./components/UpdateProduct";
import OneProduct from "./components/OneProduct";
import CreateProduct from "./components/CreateProduct";
function App() {
  return (
    <div className="App">
      <h1>Products App 🎥 🎑 🎞️ 🥝🍌</h1>
      <Link to="/">Home 🏚️</Link> ++++++ 
      <Link to="/products/create">Add Product ➕</Link>
      <Routes>
        <Route path='/' element={<Main />} />
        <Route path='/products/create' element={<CreateProduct />} />
        <Route path='/products/:id' element={<OneProduct />} />
        <Route path='/products/:id/update' element={<UpdateProduct />} />
      </Routes>
    </div>
  );
}

export default App;
