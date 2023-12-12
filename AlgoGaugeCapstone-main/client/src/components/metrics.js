import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "../stylesheets/main.scss"

import Navbar from "./navbar.js";
import Footer from "./footer.js";

export default function Metrics() {
    const [user, setUser] = useState({});
    const [showModal, setShowModal] = useState(false); // State to control modal visibility
    const navigate = useNavigate();
    const [results, setResults] = useState([{userName: "User", algoName: "Bubble Sort", otherData: "Sample Data", viewResults: "Link"}, { username: "User", algoName: "Quick Sort", otherData: "Sample Data", viewResults: "Link" }]);
    const [currentPage, setCurrentPage] = useState(1);
    const resultsPerPage = 10;
    const [viewResults, setViewResults] = useState();


    // const results = [
    //     // Example data
    //     { username: "User1", algoName: "Bubble Sort", otherData: "Sample Data", viewResults: "Link" },
    //     { username: "User2", algoName: "Quick Sort", otherData: "Sample Data", viewResults: "Link" },
    //     // Add more rows as needed
    // ];

    useEffect(() => {
        console.log("The User's Prior Runs Have Been Loaded")
        axios
            .post("http://localhost:4000/getPriorResults")
            .then(res=>{
                console.log(JSON.stringify(res.data));
                setResults(res.data);
                console.log(results);
                console.log(results[0]);
            })
            .catch((err) => {
                console.log(JSON.stringify(err.message));
            })
        
    },[]);
    const indexOfLastResult = currentPage * resultsPerPage;
    const indexOfFirstResult = indexOfLastResult - resultsPerPage;
    const currentResults = results.slice(indexOfFirstResult, indexOfLastResult);

    const paginate = pageNumber => setCurrentPage(pageNumber);

    function popUpModal(result){
        setViewResults(result.viewResults);
        setShowModal(true);
    }

    return (
        <div>
            {/* navbar */}
            <Navbar />

            {/* Table */}
            <div className="home-hero">
                <div class="background">
                    <h2 class="text-center">Metrics</h2>
                    <table className="table table-dark">
                        <thead>
                            <tr>
                                <th scope="col">Username</th>
                                <th scope="col">Algo Name</th>
                                <th scope="col">Other Data</th>
                                <th scope="col">View Results</th>
                            </tr>
                        </thead>
                        <tbody>
                            {currentResults.map((result, index) => (
                                    <tr key={index}>
                                        <td>{result.userName}</td>
                                        <td>{result.algoName}</td>
                                        <td>{result.otherData}</td>
                                        <td>
                                        <button className="btn btn-link" onClick={() => popUpModal(result)}>View</button>
                                        </td>
                                    </tr>
                            ))}
                        </tbody>

                         {/* Pagination */}
            <nav aria-label="Page navigation">
                <ul className="pagination justify-content-center">
                    {Array.from({ length: Math.ceil(results.length / resultsPerPage) }, (_, index) => index + 1).map(page => (
                        <li key={page} className={`page-item ${currentPage === page ? 'active' : ''}`}>
                            <button onClick={() => paginate(page)} className="page-link">
                                {page}
                            </button>
                        </li>
                    ))}
                </ul>
            </nav>

                    </table>
                </div>
            </div>

  {/* Bootstrap Modal */}
<div className={`modal fade ${showModal ? 'show' : ''}`} tabIndex="-1" style={{ display: showModal ? 'block' : 'none' }} data-bs-backdrop="static" aria-labelledby="modalLabel" aria-hidden="true">
    <div className="modal-dialog modal-dialog-scrollable modal-dialog-centered modal-xl">
        <div className="modal-content bg-dark text-light">
            <div className="modal-header">
                <h1 className="modal-title fs-5" id="modalLabel">View Results</h1>
                <button type="button" className="btn-close" onClick={() => setShowModal(false)} aria-label="Close"></button>
            </div>
            <div className="modal-body">
                {viewResults}
                {/* Add more content here to see the scrollable effect */}
            </div>
            <div className="modal-footer">
                <button type="button" className="btn btn-secondary" onClick={() => setShowModal(false)}>Close</button>
                <button type="button" className="btn btn-primary">See Full Queue</button>
            </div>
        </div>
    </div>
</div>



            {/* footer */}
            <Footer />
        </div>
    );
}
