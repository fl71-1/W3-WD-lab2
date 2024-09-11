const square1 = document.getElementById('square');

function getRandomValue(min) {
    return Math.floor(Math.random() * (min + 1));
}

function change() {
    const red = getRandomValue(255); 
    const green = getRandomValue(255); 
    const blue = getRandomValue(255); 
    
   
    square.style.backgroundColor = 'rgb(' + red + ', ' + green + ', ' + blue + ')';
}

setInterval(change, 1000);
