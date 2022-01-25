const colors = ["green", "red", "rgba(133,122,200)", "#f15025"];

const button = document.getElementById('btn');
const color = document.querySelector('.color');

button.addEventListener('click', function () {
    // get random number between 0-3
    const randomNumber = getRandomNumber();
    console.log(randomNumber);

    document.body.style.backgroundColor = colors[randomNumber];
    color.textContent = colors[randomNumber];
})

// now to get random number we create a function and call it. First using Math.random process.Then with the length of array multiply it which will give us random number within the range.Then using math floor concepts we able to get number without fraction.

function getRandomNumber() {
    return Math.floor(Math.random() * colors.length);
}