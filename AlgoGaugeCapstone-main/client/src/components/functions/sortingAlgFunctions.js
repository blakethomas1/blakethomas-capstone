
//Function for number slider (slider part)
export function handleRange1(e) {
    e.preventDefault();
    var val = document.getElementById("range1").value;
    document.getElementById("rangeInput1").value = val;
}

//Fuction for number slider (text input part)
export function handleInput1 (e) {
    e.preventDefault();
    var val = document.getElementById("rangeInput1").value;
    document.getElementById("range1").value = val;
}

//Function infoHide1. Resets Algo info
export function infoHide1 () {
    document.getElementById("bubbleInfo").style.display = "none";
    document.getElementById("selectionInfo").style.display = "none";
    document.getElementById("insertionInfo").style.display = "none";
    document.getElementById("quickInfo").style.display = "none";
    document.getElementById("mergeInfo").style.display = "none";
    document.getElementById("heapInfo").style.display = "none";
}

//Data type Selections
//#region data type functions

export function handleInteger1(e) {
    e.preventDefault();
    document.getElementById("dataType1").innerHTML = "Integer";
}

export function handleFloat1(e) {
    e.preventDefault();
    document.getElementById("dataType1").innerHTML = "Float";
}

export function handleDouble1(e) {
    e.preventDefault();
    document.getElementById("dataType1").innerHTML = "Double";
}

export function handleString1(e) {
    e.preventDefault();
    document.getElementById("dataType1").innerHTML = "String";
}
//#endregion

//#region Sorting algorithm functions
export function bubbleClick (e) {
    e.preventDefault();
    infoHide1();
    document.getElementById("sortingDrop").innerHTML = "Bubble Sort";
    document.getElementById("bubbleInfo").style.display = "block";
    document.getElementById("number-of-items").style.display = "block";
    document.getElementById("algoDataDrop").style.display = "block";
    document.getElementById("bubblePivot").style.display = "block";
    document.getElementById("runbtn").style.visibility = "visible";
    document.getElementById("range1").setAttribute("max",2000);
    document.getElementById("rangeInput1").setAttribute("max",2000);
    document.getElementById("medianlbl").innerHTML = "Median"
}

export function selectionClick(e) {
    e.preventDefault();
    infoHide1();
    document.getElementById("bubblePivot").style.display = "none";
    document.getElementById("sortingDrop").innerHTML = "Selection Sort";
    document.getElementById("selectionInfo").style.display = "block";
    document.getElementById("number-of-items").style.display = "block";
    document.getElementById("algoDataDrop").style.display = "block";
    document.getElementById("runbtn").style.visibility = "visible";
    document.getElementById("range1").setAttribute("max",2000);
    document.getElementById("rangeInput1").setAttribute("max",2000);
}
export function insertionClick(e) {
    e.preventDefault();
    infoHide1();
    document.getElementById("sortingDrop").innerHTML = "Insertion Sort";
    document.getElementById("insertionInfo").style.display = "block";
    document.getElementById("number-of-items").style.display = "block";
    document.getElementById("algoDataDrop").style.display = "block";
    document.getElementById("runbtn").style.visibility = "visible";
    document.getElementById("range1").setAttribute("max",2000);
    document.getElementById("rangeInput1").setAttribute("max",2000);
    document.getElementById("bubblePivot").style.display = "none";
}
export function quickClick(e) {
    e.preventDefault();
    infoHide1();
    document.getElementById("sortingDrop").innerHTML = "Quick Sort";
    document.getElementById("quickInfo").style.display = "block";
    document.getElementById("number-of-items").style.display = "block";
    document.getElementById("algoDataDrop").style.display = "block";
    document.getElementById("runbtn").style.visibility = "visible";
    document.getElementById("range1").setAttribute("max",2000);
    document.getElementById("rangeInput1").setAttribute("max",2000);
    document.getElementById("bubblePivot").style.display = "block";
    document.getElementById("medianlbl").innerHTML = "Random"
}
export function mergeClick(e) {
    e.preventDefault();
    infoHide1();
    document.getElementById("sortingDrop").innerHTML = "Merge Sort";
    document.getElementById("mergeInfo").style.display = "block";
    document.getElementById("number-of-items").style.display = "block";
    document.getElementById("algoDataDrop").style.display = "block";
    document.getElementById("runbtn").style.visibility = "visible";
    document.getElementById("range1").setAttribute("max",2000);
    document.getElementById("rangeInput1").setAttribute("max",2000);
    document.getElementById("bubblePivot").style.display = "none";
}
export function heapClick(e) {
    e.preventDefault();
    infoHide1();
    document.getElementById("sortingDrop").innerHTML = "Heap Sort";
    document.getElementById("heapInfo").style.display = "block";
    document.getElementById("number-of-items").style.display = "block";
    document.getElementById("algoDataDrop").style.display = "block";
    document.getElementById("runbtn").style.visibility = "visible";
    document.getElementById("range1").setAttribute("max",2000);
    document.getElementById("rangeInput1").setAttribute("max",2000);
    document.getElementById("bubblePivot").style.display = "none";
}
//#endregion
