import React, { Component } from "react";
import Header from "../Headers/Headers";
import Footer from "../Footers/Footers";
import { routes } from "../../Routes/Routes";

export class Main extends Component {
  render() {
    return (
      <>
        <Header />
        <main id="main">
          {routes}
        </main>
        <Footer />
      </>
    );
  }
}

export default Main;
