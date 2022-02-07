function makeRed() {
  document.body.style.backgroundColor = "red";
}

// handle blue button

const blueButton = document.getElementById("make-blue-button");
// jsut the name of the function
blueButton.onclick = makeBlue;

function makeBlue() {
  document.body.style.backgroundColor = "blue";
}
// // handle green button

// const greenButton = document.getElementById("make-green-button");
// // jsut the name of the function
// greenButton.onclick = makeGreen;

// function makeGreen() {
//   document.body.style.backgroundColor = "green";
// }

// handle event using anonymous function
const greenButton = document.getElementById("make-green-button");
greenButton.onclick = function () {
  document.body.style.backgroundColor = "green";
};

// handle by using add event listener

const goldenButton = document.getElementById('make-goldenrod');
        goldenButton.addEventListener('click',makeGoldenRod)

        function makeGoldenRod() {
            document.body.style.backgroundColor = 'goldenrod    '
        }
// addEventListener
const hotPinkButton = document.getElementById('make-hotpink');
        hotPinkButton.addEventListener('click', function (){
            document.body.style.backgroundColor = 'hotpink';
        })
// direct shortcut
document.getElementById('make-light-blue').addEventListener('click', function () {
    document.body.style.backgroundColor = 'lightblue'
})
