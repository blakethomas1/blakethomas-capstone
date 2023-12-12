import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import img from "./images/sortingTable.png";




export default function MergeInfo() {
    

    return (
        <div>
            <h1>Merge Sort</h1>
            <p>
                Generalizes this concept: Merging together two sorted sets is easy.
                So repeat that process.
            </p>
            <p>
                Starts by recursively splitting lists in half to generates indexes.
            </p>
                On recursive unwinding, merges sorted sets together.
            <div>
                {/* https://create-react-app.dev/docs/adding-images-fonts-and-files/ */} 
                {/* Use this to fix my image issues */}
                <img class="w-100" src={img}/>
            </div>
        </div>
            
    );
}
