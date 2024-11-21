import { Router, Routes, Route } from "react-router-dom"
import Login from "./components/Login"
import AddCategory from "./components/AddCategory"
import CategoryList from "./components/CategoryList"
import Product from "./components/Product"



function App() {

  return (
    <>

      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/categoryList" element={<CategoryList />} />
        <Route path="/products" element={<Product />} />

      </Routes>



    </>
  )
}

export default App
