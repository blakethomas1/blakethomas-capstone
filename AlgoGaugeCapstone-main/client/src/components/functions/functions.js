import axios from "axios";
import BubbleInfo from "../algoInfo/bubbleInfo"

export function algoClick (e) {
    e.preventDefault();
    var elements = document.getElementsByClassName("structCom");
    for(var i = 0, length = elements.length; i < length; i++) {
        elements[i].style.display = "none";
    } 

    var elements = document.getElementsByClassName("algoCom");
    for(var i = 0, length = elements.length; i < length; i++) {
          elements[i].style.display = "block";
    }

    document.getElementById("catButton").textContent = "Algorithm"
}

export function structClick () {
    var elements = document.getElementsByClassName("algoCom");
    for(var i = 0, length = elements.length; i < length; i++) {
        elements[i].style.display = "none";
    } 

    var elements = document.getElementsByClassName("structCom");
    for(var i = 0, length = elements.length; i < length; i++) {
          elements[i].style.display = "block";
    }

    document.getElementById("catButton").textContent = "Structure"
}