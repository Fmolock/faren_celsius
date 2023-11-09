function convertToCelsius(farens){
    const celsius = (farens - 32) * 0.55556;
    return celsius;
}

function createMessage(farens, celsius){
    return `You entered ${farens} degrees Fahrenheit. That is equal to ${celsius} degrees Celsius.`;
}

function rand(){
    let num = convertedCelsius;
    num = Math.ceil(num);
    return num;
}



const inputFarens = window.prompt('What temperature in degrees Farenheit would you like to convert?')



const convertedCelsius = convertToCelsius(inputFarens);


console.log(convertedCelsius)
console.log(createMessage(inputFarens, convertedCelsius))
console.log(rand(100))

if(rand % 2 === 1){
    console.log('odd');
}
else {
    console.log('even');
}


