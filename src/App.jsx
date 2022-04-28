import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Columns from "./components/columns";
import Contact from "./components/contact";
import Footer from "./components/footer";
import Gallery from "./components/gallery";
import Navbar from "./components/navbar";
import React, { Component, PropTypes } from "react";

class App extends Component {
  state = {};

  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Navbar onRouteChange={this.onRouteChange} />
          <div className="content">
            <Routes>
              <Route path="/gallery/:id" element={<Gallery />} />
              <Route path="/columns" element={<Columns />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="*" element={<Navigate to="/gallery/1" replace />} />
            </Routes>
          </div>
          <Footer bgColor={this.state.footerClr} />
        </div>
      </BrowserRouter>
    );
  }

  onRouteChange = (item) => {
    document.body.style = `background: ${item.bgColor};`;
    this.setState({ footerClr: item.ftrColor });
    console.log(this.state.footerClr);
  };
}

export default App;
