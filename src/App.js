import React, { Component } from 'react';
import { Link, Route, Switch } from "react-router-dom";
import './App.css';
import Category from './Category';

// const Home = () => (
//   <div>
//     <h2>Home</h2>
//   </div>
// );

// const Category = () => (
//   <div>
//     <h2>Category</h2>
//   </div>
// );

// const Products = () => (
//   <div>
//     <h2>Products</h2>
//   </div>
// );

function App() {
  return (
    <div className="App">
      <nav className="navbar navbar-light">
        <ul className="nav navbar-nav">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/category">Category</Link>
          </li>
          <li>
            <Link to="/products">Products</Link>
          </li>
        </ul>
      </nav>
      <Switch>
      {/* <Route exact={true} path="/" component={Home} /> */}
      <Route path="/category" component={Category} />
      {/* <Route path="/products" component={Products} /> */}
      </Switch>
    </div>
  );
}

export default App;
