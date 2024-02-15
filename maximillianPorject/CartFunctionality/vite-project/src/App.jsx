import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ProductList from './components/Product'
import MyHeader from './components/Header'

function App() {
  const [count, setCount] = useState(0)

  const [cart, setCart] = useState([])

  const addToCart = (product) => {
    console.log(product)
    setCart([...cart, product])
  }

  return (
    <>
      <MyHeader cartItems={cart} />
      <ProductList addToCart={addToCart} />
    </>
  )
}

export default App
