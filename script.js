"use strict"

const btn = document.querySelector('.btn');
const button = document.querySelector('button');
const body = document.querySelector('body');
const text = document.querySelector('h1');

btn.addEventListener('mouseover', function(e) {
    let posNeg1 = Math.random() * 10;
    let posNeg2 =  Math.random() * 10;
    posNeg1 > 5 ? posNeg1 = '' : posNeg1 = '-';
    posNeg2 > 5 ? posNeg2 = '' : posNeg2 = '-';
    const ranNum = Math.random() * 300 + 100
    console.log(ranNum);
    console.log('hey');
    btn.style.transform = `translate(${posNeg1}${ranNum}px, ${posNeg2}${ranNum}px)`
});

btn.addEventListener('click', function(e) {
    e.preventDefault();
    
   

   


    btn.classList.add('hidden');
    text.classList.remove('hidden')
    setInterval(e => {
        let ranNum = Math.random() * 255;
        let posNeg1 = Math.random() * 10;
        let posNeg2 =  Math.random() * 10;
        posNeg1 > 5 ? posNeg1 = '' : posNeg1 = '-';
        posNeg2 > 5 ? posNeg2 = '' : posNeg2 = '-';
        // console.log(ranNum);
        body.style.backgroundColor = `rgba(${Math.round(Math.random() * 255)}, ${Math.round(Math.random() * 255)}, ${Math.round(Math.random() * 255)}, 1)`
        text.style.transform = `translate(${posNeg1}${ranNum}px, ${posNeg2}${ranNum}px)`
    }, 500);

    
})