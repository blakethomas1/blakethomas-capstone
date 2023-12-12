import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "../stylesheets/main.scss"

import Navbar from "./navbar.js";

export default function UserResults(){
    return(
        // Navbar
        <Navbar />
    );
}