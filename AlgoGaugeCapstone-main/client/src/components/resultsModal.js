import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "../stylesheets/main.scss"

//this page will be put into the results modal on the testing.js screen
export default function ResultsModal() {
    const [results , setResults] = useState([]);

    function testingResults(){
        console.log("The Results Modal has been loaded.");
        axios
            .post("http://localhost:4000/getuserresults", {userName: localStorage.getItem("Username")})
            .then(res=>{
                console.log(JSON.stringify(res.data));
                setResults(JSON.parse(res.data));
                console.log(results);
                console.log(results[0]);
            })
            .catch((err) => {
                console.log(JSON.stringify(err.message));
            })
       };
    
    //need to be pulling the results from the username
    
   
   
   
   
    return (
        <body>
          

            <div>
                {results.map((result, index) => {
                        <div key = {index}>
                            <span>{result.userName}</span>
                            <span>{result.algoName}</span>
                            <span>{result.otherData}</span>
                            <span>{result.viewResults}</span>
                        </div>
                })}

            </div>
        
        </body>
           
    );
}
