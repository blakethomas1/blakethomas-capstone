import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "../stylesheets/main.scss"

import Navbar from "./navbar.js";
import Footer from "./footer.js";

export default function AboutUs() {
    
    return (
        <body>
            {/* navbar */}
            <Navbar />
            {/* title and about content */}
            <div className="home-hero">
                <div className="background">
                    <h1 className="text-center">About Us</h1>
                    <p className="text-center">This website was created by Brad Peterson, with contributions from Hunter Ferrin, Jaren Montano, Trace Erickson, and Blake Thomas.</p>
                    <p className="text-center">&copy; 2023</p>
                </div>
            </div>
            {/* footer */}
            <Footer />
        </body>    
    );
}
