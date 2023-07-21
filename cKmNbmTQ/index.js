let count = 0;
let countDisplay = document.getElementById("count-display");
let entryLog= document.getElementById("entries-log");

function save(){
    entryLog.textContent += count + " - ";
    count = 0;
}

function increment(){
    count++;
    countDisplay.textContent = count; 
}