import React from "react";
import { Route } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Services from "./Services";
import Contacts from "./Contacts";
import "./Content.css";

const Content = () => {
    return (
        <div className="content">
            <Route exact path="/" component={Home} />
            <Route exact path="/about" component={About} />
            <Route exact path="/services" component={Services} />
            <Route exact path="/contacts" component={Contacts} />
        </div>
    );
};

export default Content;
