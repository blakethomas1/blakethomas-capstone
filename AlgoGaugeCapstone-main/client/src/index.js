import React, { useEffect } from "react";
import { ReactDOM } from "react";
import axios from "axios";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import Popper from 'popper.js';
import "./stylesheets/main.scss";

// import components
// Home page component
import Home from "./components/home.js";
import Testing from "./components/testing.js";
import Navbar from "./components/navbar.js";
import UserResults from "./components/userResults";
import ModelTest from "./components/modelTest"
import Metrics from "./components/metrics.js";
import UserMetrics from "./components/userMetrics.js";
import AboutUs from "./components/aboutUs";

function App() {
    // axios.defaults.withCredentials = true;
    return (
        <div>
        <Routes>
            {/* testing page route */}
            <Route path="/" element={<Testing />}
            />
            {/* metrics page route */}
            <Route path="/metrics" element={<Metrics />}
            />
             <Route path="/usermetrics" element={<UserMetrics />}
            />
            <Route path="/aboutus" element={<AboutUs />}
            />
            <Route path="/userResults" element={<UserResults />}/>
            <Route path="/modelTest" element={<ModelTest />}></Route>
        </Routes>
        </div>
    );
}

const root = createRoot(document.getElementById("root"));

root.render(
    <BrowserRouter>
        <App />
    </BrowserRouter>
);
