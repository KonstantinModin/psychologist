import React from "react";

import Menu from "./Menu";
import Content from "./Content";
import Footer from "./Footer";

import "./App.css";

const App = () => {
    return (
        <div className="App">
            <Menu />
            <Content />
            <Footer />
        </div>
    );
};

export default App;
