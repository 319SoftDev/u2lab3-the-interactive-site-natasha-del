// YOUR CODE HERE

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
const correctContinents=[
 "north america", "europe","asia","south america", "africa", "australia", "antartica"
]; 

const continentImages = {
    "north america": document.getElementById("north-america"), 
    "europe": document.getElementById("europe"), 
    "aisa": document.getElementById("asia"), 
    "south america": document.getElementById("south-america"), 
    "africa": document.getElementById("africa"), 
    "australia": document.getElementById("australia"), 
    "antartica": document.getElementById("antartica")
}; 

const srAlert = document.getElementById("sr-continent-alert"); 
const textInput = document.getElementById("text-input");

let guessedContinents=0; 

const checkContinent=(e)=> { 
    const continent= e.target.value.toLowerCase().trim(); 

    if (correctContinents.includes(continent)){
        
        if (!continentImages[continet].classList.contains('hidden')){
            srAlert.innerHTML= `${continent} has already been selected.`;
        }else{
           
            continentImages[continent].classList.remove('hidden'); 
            guessedContinents++;
            
            srAlert.innerHTML=`${continent}is a continent. ${guessedContinents}out of 7.`
        }
    }else{
        srAlert.innerHTML=`${continent}is not a continent.`;
    }

    e.target.select();
};

textInput.addEventListener('change',checkContinent);







