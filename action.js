import { questionWithAnswer } from "./constant.js";

let questionContainer = document.querySelector('.question-container');
let endGame = document.getElementById('endGame');
let startGame = document.getElementById('startGame');

let html = '';
let marks = 0;

function updateButtonVisibility() {
    startGame.style.display = 'none';
    endGame.style.display = marks === questionWithAnswer.length ? 'block' : 'none';
}

function displayQuestion() {
    html = ''; // Reset the html variable
    questionContainer.innerHTML = ''; // Clear existing content

    for (let i = 0; i < questionWithAnswer.length; i++) {
        html += `
            <div>${questionWithAnswer[i].name}</div>
            <div key="${i}">
                <button class="ques-btn">${questionWithAnswer[i].optionOne}</button>
                <button class="ques-btn">${questionWithAnswer[i].optionTwo}</button>
                <button class="ques-btn">${questionWithAnswer[i].optionThree}</button>
                <button class="ques-btn">${questionWithAnswer[i].optionFour}</button>
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
                console.log(`Correct answer !!! You got ${marks + 1} score`);
                button.style.backgroundColor = 'green';
            //    return marks+1
            } else {
                console.log(`Wrong answer !!! You got ${marks} score`);
                button.style.backgroundColor = 'red';
                // return marks
            }

            marks++;
            updateButtonVisibility();
        });
    }
}

displayQuestion();
startGame.addEventListener('click', () => {
    console.log("quiz restarted");
    marks = 0;
    displayQuestion();
});

endGame.addEventListener('click', () => {
    console.log("quiz ended");
    questionContainer.innerHTML = `<h1>Quiz ended </h1>`;
    startGame.style.display = 'block';
    endGame.style.display = 'none';
});
