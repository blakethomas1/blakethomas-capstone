import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "../stylesheets/main.scss"
import Navbar from "./navbar.js";
import SortingAlgorithm from "./sortingAlgorithm.js";
import SortingAlgorithm2 from "./sortingAlgorithm2";
import DataStructure from "./dataStructure.js";
import Footer from "./footer.js";
import * as functions from "./functions/functions";
import ResultsModal from "./resultsModal";
//Add other algo info to runinfo next time.
export default function Home() {
    // ... (other states)
    let seed = 123;
    const [queue, setQueue] = useState([]); // Store the queue here
    const [runInfo, setRunInfo] = useState({userName: "", sortType1: "", range1: "", dataType1: "", pivotGroup1: "", sortType2: "", range2: "", dataType2: "", pivotGroup2: "", seed: ""});
    const [queuePosition, setQueuePosition] = useState({position: "-1"});
    const [userAdded, setUserAdded] = useState();
    const [showTestResultsModal, setShowTestResultsModal] = useState(false);
    const [results, setResults] = useState({userName: "", algoName: "", otherData: "", viewResults: ""});


    function post_call(url, data, callback) {
        url = `http://localhost:4000${url}`;
        console.log(url);
        axios.post(url, data).then(callback).catch(callback);
    }

    function getRandomInt(max) {
        return Math.floor(Math.random() * max);
    }

    function generateSeed(){
        seed = getRandomInt(9) * 1000 + getRandomInt(9) * 100 + getRandomInt(9) * 10 + getRandomInt(9); 
        localStorage.setItem("seed", seed);
        console.log(seed);
    }

    function handleSubmit(e) {
        e.preventDefault(); 
        localStorage.setItem("Username", runInfo.userName); // sets the username
        console.log(localStorage.getItem("Username"));
        generateSeed();
        runInfo.sortType1 = document.getElementById("sortingDrop").innerHTML
        runInfo.range1 = document.getElementById("range1").value
        runInfo.dataType1 = document.getElementById("dataType1").innerHTML
        runInfo.pivotGroup1 = document.querySelector('input[name="pivotGroup1"]:checked').value;
        runInfo.sortType2 = document.getElementById("sortingDrop2").innerHTML
        runInfo.range2 = document.getElementById("range2").value
        runInfo.dataType2 = document.getElementById("dataType2").innerHTML
        runInfo.pivotGroup2 = document.querySelector('input[name="pivotGroup2"]:checked').value;
        runInfo.seed = seed;
        console.log(runInfo);

        axios
        .post("http://localhost:4000/addtoqueue", runInfo)
        .then((res) => {
            console.log("Added result");
            console.log(res.data);
            //fetchQueue(); // Fetch the queue after adding a user
            setUserAdded("T");
            
        })
        .catch((err) => {
            console.log("Error adding results");
        });
        

        
    }

    function checkQueueStatusAndRedirect() {
        const intervalId = setInterval(() => {
            axios.get('http://localhost:4000/checkPosition', { params: { userName: runInfo.userName } })
                .then(response => {
                    if (response.data.position === null) {
                        clearInterval(intervalId);
                        setShowTestResultsModal(true); // Show the 'Test Results' modal
                    }
                })
                .catch(error => {
                    console.error("Error checking queue position", error);
                });
        }, 5000); // Poll every 5 seconds
    }
    // Fetch the current queue from the backend
    // function fetchQueue() {
    //     axios.get("http://localhost:4000/queueModel")
    //     .then((res) => {
    //         setQueue(res.data); 
    //     })
    //     .catch((err) => {
    //         console.log("Error fetching queue");
    //     });
    // }

    

    function handleChange(e) {
        setRunInfo({ ...runInfo, [e.target.name]:e.target.value });
    }

    //Find user's position in the queue
   
    const findUserPosition = () => {
        axios
        .post("http://localhost:4000/getuserposition", {userName: localStorage.getItem("Username")})
        .then(res=>{
            console.log(JSON.stringify(res.data));
            setQueuePosition(res.data);
            console.log(queuePosition);
        })
        .catch((err) => {
            console.log(JSON.stringify(err.message));
        });
    }
    // test for git
    useEffect( () => {
        axios
        .post("http://localhost:4000/getuserposition", {userName: localStorage.getItem("Username")})
        .then(res=>{
            console.log(JSON.stringify(res.data));
            setQueuePosition(res.data);
            console.log(queuePosition);
        })
        .catch((err) => {
            console.log(JSON.stringify(err.message));
        })
        
    },[userAdded]);

    function fetchFullQueue() {
        axios.get('http://localhost:4000/fullQueue') // Replace with your server's URL
            .then(response => {
                setQueue(response.data); // Update the queue state with the response data
            })
            .catch(error => {
                console.error("Error fetching the full queue", error);
            }); 
        const queueInterval = setInterval(() => {
            
           axios.get('http://localhost:4000/fullQueue') // Replace with your server's URL
            .then(response => {
                setQueue(response.data); // Update the queue state with the response data
            })
            .catch(error => {
                console.error("Error fetching the full queue", error);
            });
            axios.post("http://localhost:4000/getuserposition", {userName: localStorage.getItem("Username")})
            .then(res=>{
                console.log(JSON.stringify(res.data));
                setQueuePosition(res.data);
                if (Number(queuePosition.position) == 1)
                {
                    clearInterval(queueInterval);
                    //Change to function
                   const resultsTime = setTimeout(() => {
                    document.getElementById("resultsbtn").style.display = "block"},35000);
                }
                console.log(queuePosition);
            })
            .catch((err) => {
                console.log(JSON.stringify(err.message));
            }); 
        }, 10000)
        
    }

    function Item({ userName, index, date }) {
        if (index + 1 == Number(queuePosition.position)) {
          return [
          <h5 class="userSpot">#{index + 1} {userName}</h5>,
          <p>Joined Queue At: {new Date(date).toLocaleString()}</p>
          ];
        }
        return [
            <h5>#{index + 1} {userName}</h5>,
            <p>Joined Queue At: {new Date(date).toLocaleString()}</p>
        ];
      }

      function testingResults(){
        console.log("The Results Modal has been loaded.");
        axios
            .post("http://localhost:4000/getuserresults", {userName: localStorage.getItem("Username"), seed: localStorage.getItem("seed")})
            .then(res=>{
                console.log(JSON.stringify(res.data));
                setResults(res.data);
                console.log(results);
                console.log(results[0]);
            })
            .catch((err) => {
                console.log(JSON.stringify(err.message));
            })
       };
    

    return (
        <body>
            {/* navbar */}
            <Navbar />
            {/* title */}


            {/* Results Modal */}
            <div class="modal fade" id="resultsModal" tabindex="-1" data-bs-backdrop="static" aria-labelledby="resultsModal" aria-hidden="true">
                <div class="modal-dialog modal-dialog-scrollable modal-xl">
                    <div class="modal-content bg-dark text-light">
                        <div class="modal-header">
                            <h1 class="modal-title fs-5" id="exampleModalLabel">Results</h1>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                            <div class="modal-body">
                                <h1>Results</h1>
                                        <div class="row">{results.userName}</div>
                                        <div class="row">{results.algoName}</div>
                                        <div class="row">{results.otherData}</div>
                                        <div class="row">{results.viewResults}</div>
                                <div>
                                
                        </div>
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            <button type="button" class="btn btn-primary">Queue</button>

                        </div>
                    </div>
                </div>
            </div>

            {/* Queue Modal */}
            <div class="modal fade" id="queueModal" tabindex="-1" data-bs-backdrop="static" aria-labelledby="queueModal" aria-hidden="true">
                <div class="modal-dialog modal-dialog-scrollable modal-xl">
                    <div class="modal-content bg-dark text-light">
                        <div class="modal-header">
                            <h1 class="modal-title fs-5" id="exampleModalLabel">Queue</h1>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                            <div class="modal-body">
                            <h3 class="text-center">Place in Queue:  {queuePosition.position}</h3>
                            <div>
                                {queue.map((item, index) => (
                                    <div key={index}>
                                        <Item
                                         userName={item.userName}
                                         index={index}
                                         date={item.createdAt}  />
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            <button type="button" class="btn btn-primary" onClick={fetchFullQueue}>See Full Queue</button>
                            <button type="button" id="resultsbtn" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#resultsModal" onClick={testingResults}>See Results</button>         
                        </div>
                    </div>
                </div>
            </div>
            
            {/*Enter UserName Modal*/}
            <div class="modal fade" id="userModal" tabindex="-1" data-bs-backdrop="static" aria-labelledby="userModal" aria-hidden="true">
                <div class="modal-dialog modal-dialog-scrollable modal-xl">
                    <div class="modal-content bg-dark text-light">
                        <div class="modal-header">
                            <h1 class="modal-title fs-5" id="userName">Enter Your Name</h1>
                            <button type="submit" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body">
                            <form>
                                <label for="userName" class="form-label">Name</label>
                                <input type="input" class="form-control" name="userName" id="userName"
                                aria-describedby="userNameHelp" 
                                onChange={handleChange}/>
                            </form>
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cancel</button>
                            <button type="button" onClick={handleSubmit} class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#queueModal">Submit</button>
                        </div>
                    </div>
                </div>
            </div>
           
            <div class="testing-hero text-center">
                <div class="test-background">
                    <div class="dropdown">
                        <button id="catButton" class="btn btn-secondary dropdown-toggle dropdowns mb-5" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                            Category
                        </button>
                        <ul class="dropdown-menu">
                            <li><a class="dropdown-item" onClick={functions.algoClick} href="#">Algorithm</a></li>
                            <li><a class="dropdown-item" onClick={functions.structClick} href="#">Structure</a></li>
                        </ul>
                    </div>
                </div>


                <div class="row text-center">
                    <div class="col">
                        <div class="algoCom">
                            {   /* sortingAlgorithm */}
                            <SortingAlgorithm />
                            {/* title */}
                        </div>
                        <div class="structCom">
                            {/* dataStructure */}
                            <DataStructure class="stucture"/>
                            {/* title */}
                        </div>
                        
                    </div>
                    <div class="col">
                        <div class="algoCom">
                            {   /* sortingAlgorithm */}
                            <SortingAlgorithm2 />
                            {/* title */}
                        </div>
                        <div class="structCom">
                            {/* dataStructure */}
                            <DataStructure class="stucture"/>
                            {/* title */}
                        </div>
                    </div>
                </div>

                <div className="row">
                    <button id="runbtn" type="button" class="btn btn-primary w-25 m-auto mt-3" data-bs-toggle="modal" data-bs-target="#userModal">
                        Run
                    </button>
                </div>
                
            </div>

        

            
            {/* footer */}
            <Footer class="Footer"/>
            {/* title */}
        </body>
            
    );
}