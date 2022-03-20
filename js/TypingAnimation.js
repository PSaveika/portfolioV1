//Typewrite text content
const textArray = ["Daryk taip, kaip norėtum, kad padarytų tau"];

//Speed in ms of typing
const typingOnLoadDelay = 10;   //Typing delay on script load
const typingSpeed = 30;         //Typing speed
const speedBackspace = 40;      //Backspacing speed
const pauseAtTextEnd = 3000;    //Wait between fully typed text and erasing animation start 
const loopPause = 2000;         //Wait 

const textElementHeader = document.querySelector(".main-desc-anim"); //Text header element
const cursorElementHeader = document.querySelector(".main-desc-anim-cursor"); //Cursor header element

//Values to keep track of the numbers of letters typed
let textArrayIndex = 0;
let charIndex = 0;

function TypingAnimation() {
    //if full string hasn't yet been typed out, continue typing
    if(charIndex < textArray[textArrayIndex].length) {
        if(!cursorElementHeader.classList.contains("typingAnim")) {
            cursorElementHeader.classList.add("typingAnim");
        }
        textElementHeader.textContent += textArray[textArrayIndex].charAt(charIndex);
        charIndex++;
        setTimeout(TypingAnimation, typingSpeed);
    } else {
        //if string been fully typed, switch to backspace
        cursorElementHeader.classList.remove("typingAnim");
        setTimeout(DeleteAnimation, pauseAtTextEnd);
    }
}

function DeleteAnimation() {
    //if header still has text, continue backspacing
    if(charIndex > 0) {
        if(!cursorElementHeader.classList.contains("deleteAnim")) {
            cursorElementHeader.classList.add("deleteAnim");
        }
        textElementHeader.textContent = textArray[textArrayIndex].substring(0, charIndex-1);
        charIndex--;
        setTimeout(DeleteAnimation, speedBackspace);
    } else {
        //if header been fully erased, switch to typing
        cursorElementHeader.classList.remove("deleteAnim");
        textArrayIndex++;   //moves to next position in array
        //if array have more text, move to next position in array, otherwise, loop back to 0
        if(textArrayIndex >= textArray.length) {
            textArrayIndex = 0;
        }
        setTimeout(TypingAnimation, loopPause);
    }
}

//Run the loop
setTimeout(TypingAnimation, typingOnLoadDelay);