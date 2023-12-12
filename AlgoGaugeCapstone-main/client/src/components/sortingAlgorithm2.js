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

import * as functions from "./functions/sortingAlgFunctions2";

export default function SortingAlgorithm2() {
    
    return (
        <div>
            
            <div>
                <form>
                    <div class="dropdown">
                        <button id="sortingDrop2" class="btn btn-secondary dropdown-toggle dropdowns" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                            Select Algorithm
                        </button>
                        <ul class="dropdown-menu">
                            {/* this is where 0(n^2) */}
                            <li><a class="dropdown-item" onClick={functions.bubbleClick2} href="#">Bubble Sort</a></li>
                            <li><a class="dropdown-item" onClick={functions.selectionClick2} href="#">Selection Sort</a></li>
                            <li><a class="dropdown-item" onClick={functions.insertionClick2} href="#">Insertion Sort</a></li>
                            {/* this is where 0(nlogn) */}
                            <li><a class="dropdown-item" onClick={functions.quickClick2} href="#">Quick Sort</a></li>
                            <li><a class="dropdown-item" onClick={functions.mergeClick2} href="#">Merge Sort</a></li>
                            <li><a class="dropdown-item" onClick={functions.heapClick2} href="#">Heap Sort</a></li>
                        </ul>
                        
                    </div>
                    <div>
                        {/* <!-- Button trigger modal --> */}
                        <button type="button" class="btn btn-primary mt-3" data-bs-toggle="modal" data-bs-target="#staticBackdrop2">
                        More Info
                        </button>

                        {/* modal */}
                        <div class="modal fade" id="staticBackdrop2" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                        <div class="modal-dialog  modal-xl">
                            <div class="modal-content">
                                <div class="modal-header">
                                    <h5 class="modal-title" id="staticBackdropLabel">Modal title</h5>
                                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                </div>
                                <div class="modal-body">
                                    {/* this is where you will add the js component for each sort */}
                                    <div id="bubbleInfo2">
                                        <BubbleInfo/>
                                    </div>
                                    <div id="selectionInfo2">
                                        <SelectInfo/>
                                    </div>
                                    <div id="insertionInfo2">
                                        <InsertionInfo/>
                                    </div>
                                    <div id="quickInfo2">
                                        <QuickInfo/>
                                    </div>
                                    <div id="mergeInfo2">
                                        <MergeInfo/>
                                    </div>
                                    <div id="heapInfo2">
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
                    <div id="number-of-items2">
                        <br/>
                        <div className="row">
                            <label for="range2" class="form-label numItem">Number of Items</label>
                        </div>
                        <div className="row">
                            <input type="range" class="form-range" min="0" max="5" step="1" id="range2"
                            onChange={functions.handleRange2}></input>
                        </div>
                        <div className="row">
                            <input type="number" onChange={functions.handleInput2} class="form-control text-center" id="rangeInput2" min="0" max="5" placeholder="4760"></input>
                        </div>
                    </div>
                    <div id="algoDataDrop2" class="dropdown mt-3">
                        <button class="btn btn-secondary dropdown-toggle dropdowns" id="dataType2" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                            Select Type of Data
                        </button>
                        <ul class="dropdown-menu">
                            {/* the data types */}
                            <li><a class="dropdown-item" onClick={functions.handleInteger2} href="#">Integer</a></li>
                            <li><a class="dropdown-item" onClick={functions.handleFloat2} href="#">Float</a></li>
                            <li><a class="dropdown-item" onClick={functions.handleDouble2} href="#">Double</a></li>
                            <li><a class="dropdown-item" onClick={functions.handleString2} href="#">String</a></li>
                           
                        </ul>
                    </div>
                    <div id="bubblePivot2" class="mt-3">
                        <p>Pivot Point</p>
                        <div class="form-check form-check-inline">
                            <input class="form-check-input" type="radio" name="pivotGroup2" id="first2" value="first2" checked="true"/>
                            <label class="form-check-label" for="first">First</label>
                        </div>
                        <div class="form-check form-check-inline">
                            <input class="form-check-input" type="radio" name="pivotGroup2" id="middle2" value="middle2"/>
                            <label class="form-check-label" for="middle">Middle</label>
                        </div>
                        <div class="form-check form-check-inline">
                            <input class="form-check-input" type="radio" name="pivotGroup2" id="last2" value="last2"/>
                            <label class="form-check-label" for="last">Last</label>
                        </div>
                        <div class="form-check form-check-inline">
                            <input class="form-check-input" type="radio" name="pivotGroup2" id="median2" value="median2"/>
                            <label class="form-check-label" id="medianlbl2" for="median">Median</label>
                        </div>
                    </div>
                </form>
            </div>

         </div>
        
            
    );
}
