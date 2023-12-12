import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "../stylesheets/main.scss"



export default function DataStructure() {
    
    const navigate = useNavigate();

    return (
        
            
            <div class="structure">
                <form>
                    <div className="row">
                        <div class="dropdown">
                            <button class="btn btn-secondary dropdown-toggle dropdowns" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Select Structure
                            </button>
                            <ul class="dropdown-menu">
                                {/* this is where 0(n^2) */}
                                <li><a class="dropdown-item" href="#">Open Hashing</a></li>
                                <li><a class="dropdown-item" href="#">Linear Probing</a></li>
                                <li><a class="dropdown-item" href="#">Quadratic Probing</a></li>
                            
                            </ul>
                        </div>
                        <div>
                        <a class="button" id = "more-info" href="/testing">More Info</a>
                        </div>
                    </div>
                    
                    <div className="row">
                        <div id="number-of-items">
                            <br/>
                            <label for="customRange3" class="form-label">Number of Items</label>
                            <input type="range" class="form-range" min="0" max="5" step="0.5" id="customRange3"></input>
                            <input type="text" class="form-control"  placeholder="4760"></input>
                        </div>
                    </div>
                    
                    <div className="row mt-5">
                        <div class="dropdown">
                            <button class="btn btn-secondary dropdown-toggle dropdowns" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Select Type of Data
                            </button>
                            <ul class="dropdown-menu">
                                {/* the data types */}
                                <li><a class="dropdown-item" href="#">Integer</a></li>
                                <li><a class="dropdown-item" href="#">Float</a></li>
                                <li><a class="dropdown-item" href="#">Double</a></li>
                                <li><a class="dropdown-item" href="#">String</a></li>
                            </ul>
                        </div>
                    </div>
                </form>
            </div>

         
        
            
    );
}
