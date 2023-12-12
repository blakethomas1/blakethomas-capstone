//Function for number slider (slider part)
export function handleRange2(e) {
    e.preventDefault();
    var val = document.getElementById("range2").value;
    document.getElementById("rangeInput2").value = val;
}

//Fuction for number slider (text input part)
export function handleInput2 (e) {
    e.preventDefault();
    var val = document.getElementById("rangeInput2").value;
    document.getElementById("range2").value = val;
}

//Function infoHide2. Resets Algo info
export function infoHide2 () {
    document.getElementById("bubbleInfo2").style.display = "none";
    document.getElementById("selectionInfo2").style.display = "none";
    document.getElementById("insertionInfo2").style.display = "none";
    document.getElementById("quickInfo2").style.display = "none";
    document.getElementById("mergeInfo2").style.display = "none";
    document.getElementById("heapInfo2").style.display = "none";
}

//Data type Selections
// #region datatype functions
export function handleInteger2(e) {
    e.preventDefault();
    document.getElementById("dataType2").innerHTML = "Integer";
}

export function handleFloat2(e) {
    e.preventDefault();
    document.getElementById("dataType2").innerHTML = "Float";
}

export function handleDouble2(e) {
    e.preventDefault();
    document.getElementById("dataType2").innerHTML = "Double";
}

export function handleString2(e) {
    e.preventDefault();
    document.getElementById("dataType2").innerHTML = "String";
}
//#endregion


//#region Sorting algorithm functions
//Fuction for bubble sort click
export function bubbleClick2 (e) {
    e.preventDefault();
    document.getElementById("bubbleInfo2").style.display = "block";
    document.getElementById("sortingDrop2").innerHTML = "Bubble Sort";
    document.getElementById("number-of-items2").style.display = "block";
    document.getElementById("algoDataDrop2").style.display = "block";
    document.getElementById("bubblePivot2").style.display = "block";
    document.getElementById("runbtn").style.visibility = "visible";
}

//Function for selection sort click
export function selectionClick2(e) {
    e.preventDefault();
    infoHide2();
    document.getElementById("bubblePivot2").style.display = "none";
    document.getElementById("sortingDrop2").innerHTML = "Selection Sort";
    document.getElementById("selectionInfo2").style.display = "block";
    document.getElementById("number-of-items2").style.display = "block";
    document.getElementById("algoDataDrop2").style.display = "block";
    document.getElementById("runbtn").style.visibility = "visible";
    document.getElementById("range2").setAttribute("max",2000);
    document.getElementById("rangeInput2").setAttribute("max",2000);
}

//Function for insertion sort click
export function insertionClick2(e) {
    e.preventDefault();
    infoHide2();
    document.getElementById("sortingDrop2").innerHTML = "Insertion Sort";
    document.getElementById("insertionInfo2").style.display = "block";
    document.getElementById("number-of-items2").style.display = "block";
    document.getElementById("algoDataDrop2").style.display = "block";
    document.getElementById("runbtn").style.visibility = "visible";
    document.getElementById("range2").setAttribute("max",2000);
    document.getElementById("rangeInput2").setAttribute("max",2000);
    document.getElementById("bubblePivot2").style.display = "none";
}

//Function for quick sort click
export function quickClick2(e) {
    e.preventDefault();
    infoHide2();
    document.getElementById("sortingDrop2").innerHTML = "Quick Sort";
    document.getElementById("quickInfo2").style.display = "block";
    document.getElementById("number-of-items2").style.display = "block";
    document.getElementById("algoDataDrop2").style.display = "block";
    document.getElementById("runbtn").style.visibility = "visible";
    document.getElementById("range2").setAttribute("max",2000);
    document.getElementById("rangeInput2").setAttribute("max",2000);
    document.getElementById("bubblePivot2").style.display = "block";
    document.getElementById("medianlbl2").innerHTML = "Random"
}

//Function for merge sort click
export function mergeClick2(e) {
    e.preventDefault();
    infoHide2();
    document.getElementById("sortingDrop2").innerHTML = "Merge Sort";
    document.getElementById("mergeInfo2").style.display = "block";
    document.getElementById("number-of-items2").style.display = "block";
    document.getElementById("algoDataDrop2").style.display = "block";
    document.getElementById("runbtn").style.visibility = "visible";
    document.getElementById("range2").setAttribute("max",2000);
    document.getElementById("rangeInput2").setAttribute("max",2000);
    document.getElementById("bubblePivot2").style.display = "none";
}

//function for heap sort click
export function heapClick2(e) {
    e.preventDefault();
    infoHide2();
    document.getElementById("sortingDrop2").innerHTML = "Heap Sort";
    document.getElementById("heapInfo2").style.display = "block";
    document.getElementById("number-of-items2").style.display = "block";
    document.getElementById("algoDataDrop2").style.display = "block";
    document.getElementById("runbtn").style.visibility = "visible";
    document.getElementById("range2").setAttribute("max",2000);
    document.getElementById("rangeInput2").setAttribute("max",2000);
    document.getElementById("bubblePivot2").style.display = "none";
}
//#endregion