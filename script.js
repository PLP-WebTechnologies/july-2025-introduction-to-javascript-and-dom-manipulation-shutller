/*Variables and conditionals*/
let userName = "Obed"; //variable declaration
const userAge = 25; //constant declaration

if (userAge >= 18) { //conditional statement
    console.log(`${userName} is an adult.`);
} else {
    console.log(`${userName} is a minor.`);
}

/*Functions and */
function changeMessage() {
   document.getElementById("message").innerText = "Hello," + userName + "! Welcome to JavaScript.";
}

/*function 2: change background color randomly*/
function changeBackgroundColor() {
    let colors = ["#FF5733", "#33FF57", "#3357FF", "#F333FF", "#33FFF5"];
    let randomColor = colors[Math.floor(Math.random() * colors.length)];
    document.body.style.backgroundColor = randomColor;
}

/*part 3:Loops*/
function showNumbers() {
    let output = "";
    for (let i = 1; i <= 10; i++) { //loop from 1 to 10
        output += "Numbers: "+ i +"<br>"; //append number to output string
    }
    document.getElementById("output").innerHTML = output; //display output
}

/*while loop example*/
let count = 0;
while (count < 10) {
    console.log("Count is: " + count);
    count++;
}

/*DOM interactions*/
document.getElementById("changeTextBtn").addEventListener("click", changeMessage);
document.getElementById("changeColorBtn").addEventListener("click", changeBackgroundColor);
document.getElementById("loopBtn").addEventListener("click", showNumbers);