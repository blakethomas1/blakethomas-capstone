import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "../stylesheets/main.scss"

import Navbar from "./navbar.js";
import Footer from "./footer";

export default function Home() {
    const [user, setUser] = useState({});
    const navigate = useNavigate();

    return (
        <body>
            {/* navbar */}
            <Navbar />
            {/* title */}
            <div class="home-hero text-center">
                <div class="background">
                    <h1>Algo Gauge</h1>
                    <h3>Battle Of The Algorithms</h3>
                    <a class="home-button" href="/testing">Fight</a>
                </div>
            </div>
            {/* footer */}
            <Footer />
            {/* title */}
        </body>
            
    );
}
