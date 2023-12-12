import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import img from "./images/sortingTable.png";




export default function HeapInfo() {
    

    return (
        <div>
            <h1>Heap Sort</h1>
            <p>
                Uses a max heap to find a largest value.
            </p>
            <p>
                Moves the max heap value to the end of the set.
            </p>
            <p>
                Reheaps to find the next largest value, and moves that to the scond to the end.
            </p>
            <div>
                {/* https://create-react-app.dev/docs/adding-images-fonts-and-files/ */} 
                {/* Use this to fix my image issues */}
                <img class="w-100" src={img}/>
            </div>
        </div>
            
    );
}
