import { useState, useEffect } from "react"
import { products } from "./Data"
import Product from "./Product"
import './Style.css'

function App() {
  const [record, setRecord] = useState(products)
  const [cart, setCart] = useState([])

  const filterProduct = (cat) => {
    if (cat === "All") {
      setRecord(products)
    } else {
      let data = products.filter((val) => {
        return val.category === cat
      })
      setRecord(data)
    }
  }
  const AddtoCart = (id) => {
    let allcart = JSON.parse(localStorage.getItem("cart")) || []
    let item = allcart.find((val) => val.id == id);
    if(item){
      alert("Product is already Exist in Your Cart")
      return false;
    }

    record.map((val)=>{
      if(val.id == id){
        if(localStorage.getItem('cart') === null || localStorage.getItem('cart') === undefined){
          cart.push(val)
          localStorage.setItem('cart',JSON.stringify(cart))
        }else{
          allcart.push(val);
          localStorage.setItem('cart',JSON.stringify(allcart))

        }
      }
    })
  }

  useEffect(() => {
    setRecord(products)
    setCart(JSON.parse(localStorage.getItem('cart')) || []);
  }, [])

  return (
    <div align="center">
      <Product product={record} filterProduct={filterProduct} cart={cart} AddtoCart={AddtoCart} setCart={setCart} />
    </div>
  )
}

export default App