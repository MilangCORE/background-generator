const colorOne = document.querySelector("#colorOne");
const colorTwo = document.querySelector("#colorTwo");

const colorValue = document.querySelector("h3");

const body = document.querySelector("body");

const button = document.querySelector("button");

function generateRandomNumber() {
    let nums = [];

    for (let i = 0; i < 6; i++) {
        let current = Math.floor(Math.random() * 10);
        nums.push(current);
    }
    return nums;
}

// body.style.background = "linear-gradient(to right, " + colorOne.value + ", " + colorTwo.value + ")";
// colorValue.innerHTML = body.style.background;

changeColor(body, colorOne, colorTwo);

function changeColor(bodyBG, elOne, elTwo) {
    bodyBG.style.background = "linear-gradient(to right, " + elOne.value + ", " + elTwo.value + ")";
    colorValue.innerHTML = bodyBG.style.background + ";";
}

colorOne.addEventListener("input", function () {
    changeColor(body, colorOne, colorTwo);
});

colorTwo.addEventListener("input", function () {
    changeColor(body, colorOne, colorTwo);
});

button.addEventListener("click", function () {
    let one = generateRandomNumber();
    let two = generateRandomNumber();

    const joinOne = one.join('');
    const joinTwo = two.join('');

    console.log(joinOne);
    console.log(joinTwo);

    // colorOne.setAttribute("value", joinOne);
    // colorTwo.setAttribute("value", joinTwo);
    colorOne.value = "#" + joinOne;
    colorTwo.value = "#" + joinTwo;

    changeColor(body, colorOne, colorTwo);
});