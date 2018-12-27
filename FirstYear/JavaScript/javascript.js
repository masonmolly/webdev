window.onload = function(){ 
//Marco Gillies, 'Anonymous Functions', 2016. [Source code]. https://www.coursera.org/learn/website-coding/lecture/LCRl9/anonymous-functions
document.getElementById("intro").onclick = function() {introduction()};

function introduction() {
    document.getElementById("intro").innerHTML = "Welcome to my website!";
}

document.getElementById("gold").onclick = function() {goldsmiths()};

function goldsmiths() {
    document.getElementById("gold").src = '../Images/goldsmiths1.jpg'; //Image from Goldsmiths, University of London Facebook page
}

};