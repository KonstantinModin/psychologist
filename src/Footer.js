import React from "react";
import "./Footer.css";

const Footer = () => {
    return (
        <footer>
            <div className="colums">
                <div>
                    <h6>Adress:</h6>
                    <p>010010, New-York</p>
                    <p>1st Avenue 135 #12</p>
                    <p>+1(919) 563-222-111</p>
                    <p>+1(919) 563-222-222</p>
                </div>
                <div>
                    <h6>Links:</h6>
                    <p>YouTube</p>
                    <p>Instagram</p>
                    <p>Facebook</p>
                    <p>Twitter</p>
                </div>
                <div>
                    <h6>Extra information:</h6>
                    <p>Here we'v got some </p>
                    <p>extra information to </p>
                    <p>put in this block</p>
                </div>
            </div>
            <div className="copy">Copyright &copy; 2020 Elena Vlasova </div>
        </footer>
    );
};

export default Footer;
