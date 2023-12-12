import { useState, useEffect } from "react";
import axios from "axios";
import { NavLink } from "react-router-dom";

export default function Footer() {
    return (
        <footer className="footer  p-5">
            <div className="container">
                <div className="row text-center">
                    <div className="col-12">
                        <p className="footer-bottom__copyright">
                            &copy; 2023 All rights reserved. <a href="https://www.youtube.com/watch?v=xvFZjo5PgG0" target="_blank" rel="noopener noreferrer">Brad Peterson</a>
                        </p>
                    </div>
                </div>
            </div>
        </footer>    
    );
}