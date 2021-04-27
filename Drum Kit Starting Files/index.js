const tombol = document.querySelectorAll('button');
const audio1 = new Audio('sounds/crash.mp3');
const audio2 = new Audio('sounds/kick-bass.mp3');
const audio3 = new Audio('sounds/snare.mp3');
const audio4 = new Audio('sounds/tom-1.mp3');
const audio5 = new Audio('sounds/tom-2.mp3');
const audio6 = new Audio('sounds/tom-3.mp3');
const audio7 = new Audio('sounds/tom-4.mp3');

//dengan if
// tombol.forEach(function (e) {
//     e.addEventListener('click', function (el) {
//         // alert(`anda mengklik ${el.target.innerText}`)
//         if (el.target === document.querySelector('.w')) {
//             audio1.play();
//         }else if(el.target === document.querySelector('.a')){
//             audio2.play();
//         }else if(el.target === document.querySelector('.s')){
//             audio3.play();
//         }else if(el.target === document.querySelector('.d')){
//             audio4.play();
//         }else if(el.target === document.querySelector('.j')){
//             audio5.play();
//         }else if(el.target === document.querySelector('.k')){
//             audio6.play();
//         }else if(el.target === document.querySelector('.l')){
//             audio7.play();
//         }
//     })
// })

//dengan switch
tombol.forEach(function (e) {
    e.addEventListener('click', function (el) {
        makeSound(el.target.innerHTML)
        buttonAnimation(el.target.innerHTML)
    })
})

//keyboard
const a = document.addEventListener('keypress', function (e) {
    console.log(e.key);
    makeSound(e.key);
    buttonAnimation(e.key)
})

//fungsi suaranya
function makeSound(e) {
    switch (e) {
        case "w":
                audio1.play();
                break;
            case "a":
                audio2.play();
                break;
            case "s":
                audio3.play();
                break;
            case "d":
                audio4.play();
                break;
            case "j":
                audio5.play();
                break;
            case "k":
                audio6.play();
                break;
            case "l":
                audio7.play();
                break;
            default:
                // console.log(el.target);
    }
}

//animation
function buttonAnimation(e) {
    const activeButton = document.querySelector('.' + e)
    activeButton.classList.add('pressed')
    setTimeout(function () {
        activeButton.classList.remove('pressed')
    } ,200)
}
