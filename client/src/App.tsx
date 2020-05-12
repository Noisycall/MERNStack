import React from "react";
import logo from "./logo.svg";
import "./App.css";
import NavBar from "./components/NavBar/NavBar";
import ShoppingList from "./components/ShoppingList/ShoppingList";

function App() {
  return (
    <div className="App">
      <NavBar />
      <ShoppingList />
    </div>
  );
}

export default App;
