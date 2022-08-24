// let myHeading = document.querySelector('h1');
// myHeading.textContent = 'Bonjour, monde !';

let myImage = document.querySelector('img');

myImage.addEventListener('click', function(){
    let mySrc = myImage.getAttribute('src');
    if (mySrc === 'images/download.jpg'){
        myImage.setAttribute('src', 'images/download2.jpg');
    }
    else{
        myImage.setAttribute('src', 'images/download.jpg');
    }
});

let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');

function setUserName(){
    let myName = prompt('Veuillez saisir votre nom.');
    localStorage.setItem('nom', myName);
    myHeading.textContent = 'Mozilla est cool, ' + myName;
}

myButton.addEventListener('click', function() {
    setUserName();
});

if (!localStorage.getItem('nom')){
    setUserName();
}
else{
    let storedName = localStorage.getItem('nom');
    myHeading.textContent = 'Mozilla est cool, ' + storedName;
}