"use strict"

const btn = document.querySelector('.btn');
const body = document.querySelector('body');
const text = document.querySelector('h1');
const html = document.querySelector('html')

// Returns a negative character randomly to be used in our transform: translate

const posNeg = function() {
    let output = Math.random() * 10;
    return output > 5 ? output = '' : output = '-';
};

// Random number generator 0-255

const ranNumber = function() {
    return Math.round(Math.random() * 255);
};

// Make button dart around

btn.addEventListener('mouseover', function() {
    const ranNum = (Math.random() * 300) + 150;
    btn.style.transform = `translate(${posNeg()}${ranNum}px, ${posNeg()}${ranNum}px)`;
});

// Display pleasant victory message

btn.addEventListener('click', function(e) {
    e.preventDefault();

    // Displays message and makes it dart around the page

    btn.classList.add('hidden');
    text.classList.remove('hidden');
    setInterval(() => {      
        body.style.backgroundColor = `rgba(${ranNumber()}, ${ranNumber()}, ${ranNumber()})`;
        text.style.transform = `translate(${posNeg()}${ranNumber() + 50}px, ${posNeg()}${ranNumber() + 50}px)`;
    }, 250);

    // Makes (cursor) hand wave

    setInterval(() => {
        html.style.cursor = 'grabbing'
    }, 100)
    setInterval(() => {
        html.style.cursor = 'grab'
    }, 200)
    
    // setInterval(() => {
    //     text.classList.toggle('spin')
    // }, 2000);



});