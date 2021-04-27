const randomNumber1 = Math.floor(Math.random() * 6) + 1;
const randomNumber2 = Math.floor(Math.random() * 6) + 1;
const img1 = document.querySelector('.img1')
const img2 = document.querySelector('.img2')
const h1 = document.querySelector('h1')

img1.setAttribute('src', "images/dice" + randomNumber1 + ".png");
img2.setAttribute('src', "images/dice" + randomNumber2 + ".png");

if (randomNumber1 > randomNumber2) {
    h1.innerHTML = 'plyaer 1 win'
}else if(randomNumber1 === randomNumber2){
    h1.innerHTML = 'Seri'
}else{
    h1.innerHTML = 'player 2 win'
}