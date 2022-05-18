let myImg = document.querySelector("img");
myImg.onclick = () => {
    let mySrc = myImg.getAttribute('src');
    if (mySrc === "images/firefox-icon.png") {
        myImg.setAttribute('src', 'images/arp.png')
    } else {
        myImg.setAttribute('src', 'images/firefox-icon.png');    }
}
let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');

function setUsername() {
    let myName = prompt('please enter your name');
    if (!myName) { setUsername() } else {
        localStorage.setItem('name', myName);
        myHeading.textContent = 'you are dumb ' + myName;
    }
}
if (!localStorage.getItem('name')) {
    setUsername();
} else {
    let storedName = localStorage.getItem('name');
    myHeading.textContent = 'Mozilla is cool, ' + storedName;
}
myButton.onclick = function () { setUsername() }