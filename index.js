// Detecting Button Press


var numberOfDrumButtons = document.querySelectorAll(".drum").length; //this line creates variable "number of drum buttons and assigns in the value of the number of elements on the webpage that have class ".drum" 
for (var i = 0; i < numberOfDrumButtons; i++) { //for loop which starts with 0, goes up by 1, and finished when the numberOfDrumButtons is reached
    
    document.querySelectorAll(".drum")[i].addEventListener("click", function () {  //this line selects the "i"-th element with the class ".dum"and adds an event listener that triggers when when the element in clicked
                
        var buttonInnerHTML = this.innerHTML; // retrieves the HTML content within the element that was clicked. In the context of the code you provided, the element that was clicked is one of the drum buttons, which has a single letter inside it ("w", "a", "s", etc.). is a line of code that retrieves the HTML content (i.e., the single letter) inside the drum button that was clicked and assigns it to a variable named buttonInnerHTML.

        makeSound(buttonInnerHTML);
        
        buttonAnimation (buttonInnerHTML);


    });
   
}

// Detecting Keyboard Press

document.addEventListener("keydown", function (event) { //The code starts with "document.addEventListener", which means that the code is listening for an event that happens on the whole webpage. In this case, it is listening for a "keydown" event, which means someone pressed a key on their keyboard.
    
    makeSound (event.key);
    buttonAnimation (event.key);
});


function makeSound(key) {

    switch (key) { //switch funtion evaluates value of the "buttonInnerHTML" variable
        case "w": //This line sets up a case within the switch statement. If buttonInnerHTML is equal to "w", the code inside the following curly braces will be executed.
            var crash = new Audio("sounds/crash.mp3"); //This line creates a new Audio object called crash and sets the source to the file "sounds/crash.mp3".
            crash.play(); //This line calls the play() method on the crash object, which starts playing the audio file.
            break; //This line signals the end of the case.
        case "a":
            var kick = new Audio("sounds/kick-bass.mp3");
            kick.play();
            break;
        case "s":
            var snare = new Audio("sounds/snare.mp3");
            snare.play();
            break;
        case "d":
            var tom1 = new Audio("sounds/tom-1.mp3");
            tom1.play();
            break;
        case "j":
            var tom2 = new Audio("sounds/tom-2.mp3");
            tom2.play();
            break;
        case "k":
            var tom3 = new Audio("sounds/tom-3.mp3");
            tom3.play();
            break;
        case "l":
            var tom4 = new Audio("sounds/tom-4.mp3");
            tom4.play();
            break;     
        default: console.log(buttonInnerHTML); //works like "else" statement it is an option for every other thing that will happen
    }    

}

function buttonAnimation (currentKey) {

    var activeButton = document.querySelector("."+currentKey)
    activeButton.classList.add("pressed");
    setTimeout (function (){ //function which is removing the effect of the previous function
    activeButton.classList.remove("pressed"); 
    }, 100 ); //time to wait for removal
}