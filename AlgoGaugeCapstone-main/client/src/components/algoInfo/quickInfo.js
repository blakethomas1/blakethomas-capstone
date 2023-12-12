import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import img from "./images/sortingTable.png";




export default function QuickInfo() {
    

    return (
        <div>
            <h1>Quick Sort</h1>
            <p>
                Select a pivot. Organize the container into two parts:
                A- all values less than the pivot, and 
                B- all values greater or equal to the pivot. 
            </p>
            <p>
                Recursively repeat for the set A and set B.
            </p>
                
            <div>
                {/* https://create-react-app.dev/docs/adding-images-fonts-and-files/ */} 
                {/* Use this to fix my image issues */}
                <img class="w-100" src={img}/>
            </div>
        </div>
            
    );
}
