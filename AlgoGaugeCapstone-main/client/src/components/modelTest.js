import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";


function ModelTest(){

    const [runInfo, setRunInfo] = useState({userName: ""/*, algoName: "", otherData: "", viewResults: ""*/});
    

    function handleSubmit(e){
        e.preventDefault(); 
        axios
        .post("http://localhost:4000/results", runInfo)
        .then((res) => {
            console.log("Added result")
        })
        .catch((err) => {
            console.log("Error adding results")
        })

    }
    function handleChange(e){
        setRunInfo({ ...runInfo, [e.target.name]:e.target.value});
    }

    return(
        <div>
            <form onSubmit={handleSubmit}>
                <label>Username: </label>
                <input type="text" name="userName" id="userName" onChange={handleChange}></input>
                <br/>
                <button type="submit">Login</button>
                
            </form>
        </div>
    );
}

export default ModelTest;