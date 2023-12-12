import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import img from "./images/sortingTable.png";




export default function SelectInfo() {
    

    return (
        <div>
            <h1>Select Sort</h1>
            <p>
                Go find the smallest number. Look among all unsorted values.
                Ensure the smallest gets swapped to the left.

            </p>
            <p>
                Repeat prior algorithm to find the second smallest number, then third
                smallest number, etc.
            </p>
                
            <div>
                {/* https://create-react-app.dev/docs/adding-images-fonts-and-files/ */} 
                {/* Use this to fix my image issues */}
                <img class="w-100" src={img} alt = "Sorting Table "/>
            </div>
        </div>
            
    );
}
