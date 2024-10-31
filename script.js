// YOUR CODE HERE
/ YOUR CODE HERE

const radioInput= document.querySelector("#fav_color");
const radioOutput = document.querySelector("#radio-output"); 

const displayColor = (e) => {
    //the color that was selected 
    const color = e.target.value; 
    if(color=='blue'){
        radioOutput.innerHTML="you picked blue 💙"
    } else if (color=='green'){
        radioOutput.innerHTML='you picked green💚'
    } else if(color=='pink'){
        radioOutput.innerHTML='you picked pink 💕'
    } else if(color=='black'){
        radioOutput.innerHTML='you picked black🖤'
    }   
};

radioInput.addEventListener('change',displayColor);

// getRandomInt() - gets a random number between 1 and 100
// is_dark(hex) - takes in a hex number (for example #123456) and returns true if it's dark and false if it's light.
const randomNumber = getRandomInt();
console.log(randomNumber);

const numInput = document.querySelector("#num-input");
const numOutput = document.querySelector("#num-output");

const checkNumber = (e) => {
    // the inputted number (as an integer not as a string)
    const value = e.target.valueAsNumber;
    if(value>randomNumber){
        numOutput.innerHTML='not' + value +', guess lower';
    }else if(value<randomNumber){
        numOutput.innerHTML='guess higher'+ value + 'guess higher';
    } else if(value=randomNumber){
        numOutput.innerHTML='Hurray'

    }
    
    
    // Insert conditional code here.
}

numInput.addEventListener('change', checkNumber);

//get all elements with the class "continent"
const continents=document.querySelectorAll('.continet'); 

//all the "hidden" class to all continent elements initially 
continents.forEach(continent=>{
    continent.classList.add('hidden');
});


// funtion to handle user input and reveal the corresponding continent image function revealContinent(userinput){}
const input=upperInput.toLowerCase();

let continentFound = false; 


const continentName = continent.id.toLowerCase();

if(continentName===input){
    continent.classList.Remove('hidden');
    continentFound= true; 
}

let messageElement = document.getElementById("message");
if(messageElement){
    messageElement.textContent="invalid continent name";
}

// getRandomInt() - gets a random number between 1 and 100
// is_dark(hex) - takes in a hex number (for example #123456) and returns true if it's dark and false if it's light.

