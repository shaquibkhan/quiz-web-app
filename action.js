import { questionWithAnswer } from "./constant.js";

let body = document.querySelector('body');
let registerButton = document.querySelector('#registerButton');
let input = document.querySelector('input');
let showName = document.querySelector('#showName');
let finalScore = document.querySelector('.final-score')

registerButton.addEventListener('click',()=>{
    
    showName.innerHTML = `Hello, ${input.value}`;
    console.log(showName);
    input.style.display = 'none'
    registerButton.style.display = 'none'
})

const darkLightMode = ()=> {
    let darkMode = document.getElementById('darkMode')
    let lightMode = document.getElementById('lightMode')
    lightMode.style.display = 'none'
darkMode.addEventListener('click', ()=>{
    body.style.backgroundColor = '#1D1D1D';
    body.style.color = 'white';
    darkMode.style.display = 'none'
    lightMode.style.display = 'block'

})
lightMode.addEventListener('click', ()=>{
    body.style.backgroundColor = `#f5f1fe`;
    body.style.color = 'black';
    lightMode.style.display = 'none'
    darkMode.style.display = 'block'
})
}
darkLightMode()

let questionContainer = document.querySelector('.question-container');
let endGame = document.getElementById('endGame');
let startGame = document.getElementById('startGame');

let html = '';
let marks = 0;

// function updateButtonVisibility() {
//     startGame.style.display = 'none';
//     endGame.style.display = marks === questionWithAnswer.length ? 'block' : 'none';
// }

function displayQuestion() {
    html = ''; // Reset the html variable
    questionContainer.innerHTML = ''; // Clear existing content

    for (let i = 0; i < questionWithAnswer.length; i++) {
        html += `
           <div class="question-dashboard">
           <div class="question-row">${questionWithAnswer[i].name}</div>
           <div  key="${i}">
               <button class="ques-btn">${questionWithAnswer[i].optionOne}</button>
               <button class="ques-btn">${questionWithAnswer[i].optionTwo}</button>
               <button class="ques-btn">${questionWithAnswer[i].optionThree}</button>
               <button class="ques-btn">${questionWithAnswer[i].optionFour}</button>
           </div>
           </div>
        `;
     
    }

    questionContainer.innerHTML = html;

    // Set up event listeners for buttons
    let buttons = document.getElementsByClassName('ques-btn');
    for (let button of buttons) {
        button.addEventListener('click', (e) => {
            let currentQuestionIndex = parseInt(e.target.parentNode.getAttribute('key'));
            let currentQuestion = questionWithAnswer[currentQuestionIndex];
            console.log(currentQuestion.answer);

            if (e.target.innerHTML === currentQuestion.answer) {
                console.log(`Correct answer !!! You got ${marks+1} score`);
                button.style.backgroundColor = 'green';
                marks +=1;
            } else {
                console.log(`Wrong answer !!! You got ${marks} score`);
                button.style.backgroundColor = 'red';
                // return marks
               return marks
            }

            
            // updateButtonVisibility();
        });
    }
}




displayQuestion();
startGame.addEventListener('click', () => {
    console.log("quiz restarted");
    marks = 0;
    displayQuestion();
    showName.innerHTML = ''
    input.style.display = 'block'
    registerButton.style.display = 'block'
    endGame.style.display = 'block';
    input.value = ''
    questionContainer.style.display = 'block'
    finalScore.style.display = 'none'
});

endGame.addEventListener('click', () => {
    console.log("quiz ended", marks);
    finalScore.innerHTML = `<h1>Quiz ended your score is ${marks} </h1>`;
    startGame.style.display = 'block';
    endGame.style.display = 'none';
    showName.innerHTML = ''
    input.style.display = 'none'
    registerButton.style.display = 'none'
    questionContainer.style.display = 'none'
    finalScore.style.display = 'block'
    input.value = ''
});
