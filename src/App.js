import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import Cart from "./components/Cart";
import Nav from "./components/Nav"

function App() {
  const [app, setApp] = useState({
    cart: [
      { id: 1, value: 1 },
      { id: 2, value: 2 },
      { id: 3, value: 3 }
    ]
  });

  const handleIncrement = item => {
    item.value++
    setApp({...app});
    // have to use spread because the {...app} is different from the old app object
  };

  const handleDecrement = item => {
    item.value--
    setApp({...app})
  }

  const handleDelete = item => {
    const index = app.cart.indexOf(item)
    console.log(index)
    app.cart.splice(index, 1)
    setApp({...app})
  }

  const handleAdd = () => {
    let index = app.cart.length - 1, 
        itemId = app.cart[index].id + 1,
        itemValue = 7,
        newItem = {id: itemId, value: itemValue}
    app.cart.push(newItem)
    setApp({...app})
  }


  return (
    <div className="App">
      <div className="Nav">
        <Nav 
          cart={app.cart}
          onAdd={handleAdd}
        />
      </div>

      <div className="Cart">
        <Cart 
          cart={app.cart} 
          onIncrement={handleIncrement}
          onDecrement={handleDecrement} 
          onDelete={handleDelete}
        />
      </div>
    </div>
  );
}

export default App;
