import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import img from "./images/sortingTable.png";




export default function InsertionInfo() {
    

    return (
        <div>
            <h1>Insertion Sort</h1>
            <p>
                Take the next unsorted value. Look back through the sorted set of
                of values and inserted this unsorted value into its correct spot.
            </p>
            <p>
                Repeat prior algorithm to sort the next number, then the next number after that, etc.
            </p>
            
            <div>
                {/* https://create-react-app.dev/docs/adding-images-fonts-and-files/ */} 
                {/* Use this to fix my image issues */}
                <img class="w-100" src={img}/>
            </div>
        </div>
            
    );
}
