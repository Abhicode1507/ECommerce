import React, { Component } from "react";
import { NavBar } from "./Navbar";
import ShoppingCart from "./ShoppingCart";
import Login from "./Login";
import Dashboard from "./Dashboard";
import CustomerList from "./CustomerList";
import { Routes, Route, Router } from "react-router-dom";
import NoMatchPage from "./NoMatchPage";
// import history from "./history";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = { isLoggedIn: false };
  }

  render() {
    return (
      <Router>
        <NavBar isLoggedIn={this.state.isLoggedIn} />
        <div className="container-fluid">
          <Routes>
            <Route
              path="/"
              element={
                <Login/>
              }
            />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/customers" element={<CustomerList />} />
            <Route path="/cart" element={<ShoppingCart />} />
            <Route path="*" element={<NoMatchPage />} />
          </Routes>
        </div>
      </Router>
    );
  }
                                                              
//   updateIsLoggedInStatus = (status) => {
//     this.setState({ isLoggedIn: status });
//   };
}
