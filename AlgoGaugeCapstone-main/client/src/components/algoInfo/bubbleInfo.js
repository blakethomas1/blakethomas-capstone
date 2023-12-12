import { useState, useEffect } from "react";
import axios from "axios";
import img from "./images/sortingTable.png";



export default function BubbleInfo() {
    

    return (
        <div>
            <h1>Bubble Sort</h1>
            <p>
                Compare pairs of values then swap the larger to the right. 
                Repeat for each pair. Repeat for all pairs until the largest value has "bubbled"
                to the right.
            </p>
            <p>
                Repeat prior algorithm to find the second largest number, then third
                largest number, etc.
            </p>
            <div>
                <img class="w-100" src={img} alt="Sorting Table"/>
            </div>
        </div>
            
    );
}
