import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "../stylesheets/main.scss"
import BubbleInfo from "./algoInfo/bubbleInfo";
import HeapInfo from "./algoInfo/heapInfo";
import InsertionInfo from "./algoInfo/insertionInfo";
import MergeInfo from "./algoInfo/mergeinfo";
import QuickInfo from "./algoInfo/quickInfo";
import SelectInfo from "./algoInfo/selectInfo";

import * as functions from "./functions/sortingAlgFunctions";

export default function SortingAlgorithm() {
    return (
        <div>
            
            <div>
                <form>
                    <div class="dropdown">
                        <button id="sortingDrop" class="btn btn-secondary dropdown-toggle dropdowns" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                            Select Algorithm
                        </button>
                        <ul class="dropdown-menu">
                            {/* this is where 0(n^2) */}
                            <li><a class="dropdown-item" onClick={functions.bubbleClick} href="#">Bubble Sort</a></li>
                            <li><a class="dropdown-item" onClick={functions.selectionClick} href="#">Selection Sort</a></li>
                            <li><a class="dropdown-item" onClick={functions.insertionClick} href="#">Insertion Sort</a></li>
                            {/* this is where 0(nlogn) */}
                            <li><a class="dropdown-item" onClick={functions.quickClick} href="#">Quick Sort</a></li>
                            <li><a class="dropdown-item" onClick={functions.mergeClick} href="#">Merge Sort</a></li>
                            <li><a class="dropdown-item" onClick={functions.heapClick} href="#">Heap Sort</a></li>
                        </ul>
                        
                    </div>
                    <div>
                        {/* <!-- Button trigger modal --> */}
                        <button type="button" class="btn btn-primary mt-3" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
                        More Info
                        </button>

                        {/* modal */}
                        <div class="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                        <div class="modal-dialog  modal-xl">
                            <div class="modal-content">
                                <div class="modal-header">
                                    <h5 class="modal-title" id="staticBackdropLabel">Modal title</h5>
                                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                </div>
                                <div class="modal-body">
                                    {/* this is where you will add the js component for each sort */}
                                    <div id="bubbleInfo">
                                        <BubbleInfo/>
                                    </div>
                                    <div id="selectionInfo">
                                        <SelectInfo/>
                                    </div>
                                    <div id="insertionInfo">
                                        <InsertionInfo/>
                                    </div>
                                    <div id="quickInfo">
                                        <QuickInfo/>
                                    </div>
                                    <div id="mergeInfo">
                                        <MergeInfo/>
                                    </div>
                                    <div id="heapInfo">
                                        <HeapInfo/>
                                    </div>
                                </div>
                                <div class="modal-footer">
                                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                </div>
                            </div>
                        </div>
                        </div>
                    </div>
                    <div id="number-of-items">
                        <br/>
                        <div className="row">
                            <label for="range1" class="form-label numItem">Number of Items</label>
                        </div>
                        <div className="row">
                            <input type="range" onChange={functions.handleRange1} class="form-range" min="0" max="5" step="1" id="range1"></input>
                        </div>
                        <div className="row">
                            <input type="number"  onChange={functions.handleInput1} class="form-control" min="0" max="5" id="rangeInput1" placeholder="4760"></input>
                        </div>
                        
                        
                        
                    </div>
                    <div id="algoDataDrop" class="dropdown mt-3">
                        <button class="btn btn-secondary dropdown-toggle dropdowns" id="dataType1" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                            Select Type of Data
                        </button>
                        <ul class="dropdown-menu">
                            {/* the data types */}
                            <li><a class="dropdown-item" onClick={functions.handleInteger1} href="#">Integer</a></li>
                            <li><a class="dropdown-item" onClick={functions.handleFloat1} href="#">Float</a></li>
                            <li><a class="dropdown-item" onClick={functions.handleDouble1} href="#">Double</a></li>
                            <li><a class="dropdown-item" onClick={functions.handleString1} href="#">String</a></li>
                           
                        </ul>
                    </div>
                    <div id="bubblePivot" class="mt-3">
                        <p>Pivot Point</p>
                        <div class="form-check form-check-inline">
                            <input class="form-check-input" type="radio" name="pivotGroup1" id="first" value="first" checked="true"/>
                            <label class="form-check-label" for="first">First</label>
                        </div>
                        <div class="form-check form-check-inline">
                            <input class="form-check-input" type="radio" name="pivotGroup1" id="middle" value="middle"/>
                            <label class="form-check-label" for="middle">Middle</label>
                        </div>
                        <div class="form-check form-check-inline">
                            <input class="form-check-input" type="radio" name="pivotGroup1" id="last" value="last"/>
                            <label class="form-check-label" for="last">Last</label>
                        </div>
                        <div class="form-check form-check-inline">
                            <input class="form-check-input" type="radio" name="pivotGroup1" id="median" value="median"/>
                            <label class="form-check-label" id="medianlbl" for="median">Median</label>
                        </div>
                    </div>
                </form>
            </div>

         </div>
        
            
    );
}
