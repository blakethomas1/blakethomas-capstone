import { useState, useEffect } from "react";
import axios from "axios";
import { NavLink } from "react-router-dom";

export default function Navbar() {
    return (
        <nav class="navbar navbar-expand-lg">
            <div class="container-fluid">
                <a class="navbar-brand" href="/">Algo Gauge</a>
                <ul class="navbar-nav m-auto">
                    <NavLink
                        to="/"
                        className="nav-link nav-item"
                        >
                        Tests
                    </NavLink>
                    <div class="btn-group">
                        <button type="button" class="nav-link nav-item" data-bs-toggle="dropdown" aria-expanded="false">
                            Metrics
                        </button>
                        <ul class="dropdown-menu nav-drop text-center">
                            <li>
                                <NavLink
                                    to="/userMetrics"
                                    className="dropdown-item nav-drop-item text-center">Your Runs
                                    </NavLink>
                            </li>
                            <li><hr class="dropdown-divider"></hr></li>
                            <li>
                                <NavLink
                                    to="/metrics"
                                    className="dropdown-item nav-drop-item text-center">Prior Runs
                                    </NavLink>
                            </li>
                        </ul>
                    </div>
                    <NavLink
                        to="/aboutus"
                        className="nav-link nav-item"
                        >About Us</NavLink>
                </ul>
            </div>
        </nav>
        
    );
}