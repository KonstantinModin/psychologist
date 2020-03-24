import React from "react";
import { Route } from "react-router-dom";
import Home from "./Home";
import "./Content.css";

const Content = () => {
    return (
        <div className="content">
            <Route exact path="/" component={Home} />
            <Route exact path="/about" component={Home} />
            <Route exact path="/services" component={Home} />
            <Route exact path="/contacts" component={Home} />
        </div>
    );
};

export default Content;
