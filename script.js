"use strict"

const btn = document.querySelector('.btn');
const button = document.querySelector('button');
const body = document.querySelector('body');
const text = document.querySelector('h1');

// Returns a negative character randomly to be used in our transform: translate

const posNeg = function() {
    let posNeg = Math.random() * 10;
    return posNeg > 5 ? posNeg = '' : posNeg = '-';
};

// Random number generator 0-255

const ranNumber = function() {
    return Math.round(Math.random() * 255);
};

ranNumber();

// Make button dart around

btn.addEventListener('mouseover', function(e) {
    const ranNum = Math.random() * 300 + 100;
    console.log(ranNum);
    console.log('hey');
    btn.style.transform = `translate(${posNeg()}${ranNum}px, ${posNeg()}${ranNum}px)`;
});

// Display pleasant victory message

btn.addEventListener('click', function(e) {
    e.preventDefault();

    btn.classList.add('hidden');
    text.classList.remove('hidden');
    setInterval(e => {
        body.style.backgroundColor = `rgba(${ranNumber()}, ${ranNumber()}, ${ranNumber()}, 1)`;
        text.style.transform = `translate(${posNeg()}${ranNumber()}px, ${posNeg()}${ranNumber()}px)`;
    }, 250);    
});