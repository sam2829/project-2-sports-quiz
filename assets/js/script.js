/**
 * Parts of code was taken from youtube tutorial which is referenced in the readme file with a url link.
 */

//List of all the questions and answers in the quiz

let questions = [
    {
        question: "What did Michael Jordan say to the media when he returned to basketball in 1995?",
        answers: [
            { text: `"I'm back"`, correct: true },
            { text: `"Lets go win a championship"`, correct: false },
            { text: `"I'm here to win"`, correct: false },
            { text: `"I'm better at basketball than baseball"`, correct: false }
        ],
    },

    {
        question: "Where did Jurgen Klopp start his managerial career?",
        answers: [
            { text: "Bayer Leverkusen", correct: false },
            { text: "Oktoberfest", correct: false },
            { text: "Mainz", correct: true },
            { text: "Borussia Dortmund", correct: false }
        ],
    },
    {
        question: "Which cricketer has taken the most test wickets?",
        answers: [
            { text: "Shane Warne", correct: false },
            { text: "Glen McGrath", correct: false },
            { text: "Muthiah Muralitharan", correct: true },
            { text: "Eddie the eagle", correct: false }
        ],
    },
    {
        question: "Who did Muhammad Ali fight in rumble in the jungle?",
        answers: [
            { text: "Jason Bourne", correct: false },
            { text: "George Foreman", correct: true },
            { text: "Larry Holmes", correct: false },
            { text: "Joe Frazier", correct: false }
        ],
    },
    {
        question: "In which sport would you commonly use the terms: Chukka, Neckshot and Millionaires shot?",
        answers: [
            { text: "Polo", correct: true },
            { text: "Bowls", correct: false },
            { text: "Volleyball", correct: false },
            { text: "Rugby", correct: false }
        ],
    },
    {
        question: "Which formula 1 team did Lewis Hamilton compete for from 2007 to 2012?",
        answers: [
            { text: "Mercedes", correct: false },
            { text: "Ferrari", correct: false },
            { text: "Vauxhall", correct: false },
            { text: "McLaren", correct: true }
        ],
    },
    {
        question: "What sport did Princess Anne compete in at the 1976 summer Olympic games?",
        answers: [
            { text: "Judo", correct: false },
            { text: "Equestrian", correct: true },
            { text: "Volleyball", correct: false },
            { text: "Gymnastics", correct: false }
        ],
    },
    {
        question: "How many Olympic gold medals did Michael Phelps win?",
        answers: [
            { text: "23", correct: true },
            { text: "25", correct: false },
            { text: "21", correct: false },
            { text: "1", correct: false },
        ],
    },
    {
        question: "Which female tennis player has won the most grand slams?",
        answers: [
            { text: "Venus Williams", correct: false },
            { text: "Margaret Court", correct: true },
            { text: "Serena Williams", correct: false },
            { text: "Kim Kardashian", correct: false }
        ],
    },
    {
        question: "Which golfers have won the most PGA Tour events with 82 wins each?",
        answers: [
            { text: "Tiger Woods & Jack Nicklaus", correct: false },
            { text: "Jack Nicklaus & Nick Faldo", correct: false },
            { text: "Tiger Woods & Sam Snead", correct: true },
            { text: "Phil & Grant Mitchell", correct: false }
        ],
    },
    {
        question: "Where did Sir Alex Ferguson start out his managerial career?",
        answers: [
            { text: "St Mirren", correct: false },
            { text: "Aberdeen", correct: false },
            { text: "Mardy FC", correct: false },
            { text: "East Stirlingshire", correct: true }
        ],
    },
    {
        question: "Who is the Premier Leagues all time top goal scorer?",
        answers: [
            { text: "Dean Windass", correct: false },
            { text: "Alan Shearer", correct: true },
            { text: "Harry Kane", correct: false },
            { text: "Wayne Rooney", correct: false },
        ],
    },
    {
        question: "What was Usain Bolts 100 meters record breaking time?",
        answers: [
            { text: "45 Seconds", correct: false },
            { text: "10.05 Seconds", correct: false },
            { text: "9.58 Seconds", correct: true },
            { text: "9.89 Seconds", correct: false }
        ],
    },
    {
        question: "What year did England win the rugby world cup?",
        answers: [
            { text: "2003", correct: true },
            { text: "2007", correct: false },
            { text: "1966", correct: false },
            { text: "2022", correct: false }
        ],
    },
    {
        question: "Who is the leading all time try scorer for Wales in rugby?",
        answers: [
            { text: "George North", correct: false },
            { text: "Shane Williams", correct: true },
            { text: "Gareth Thomas", correct: false },
            { text: "Hugh Llewellyn", correct: false }
        ],
    },
];

let randomQuestions = 0;
let questionNumber = 0;
let answerArea = document.getElementById("answer-area");
let nextButton = document.getElementById("next-button");
let correctScore = parseInt(document.getElementById("score").innerText);
let incorrectScore = parseInt(document.getElementById("incorrect").innerText);
let progressBar = document.getElementById("my-bar");

// Wait for start quiz button to be clicked to begin the quiz

document.getElementById("start-button").addEventListener("click", startQuiz);

/**
 * Start quiz function.
 * Hides the start quiz button and displays the quiz.
 * Randomises the order of the questions each time quiz starts.
 * Then calls the display questions function.
 */

function startQuiz() {

    document.getElementById("start-button").style.display = "none";
    document.getElementById("game-area").style.display = "block";

    randomQuestions = questions.sort(() => Math.random() - .5);

    displayQuestions();



}

//Display questions function

function displayQuestions() {

    resetPage();

    let currentQuestion = randomQuestions[questionNumber];

    questionNumber = questionNumber + 1;

    document.getElementById("question").textContent = questionNumber + ". " + currentQuestion.question;


    // display answers with the current question and add style classes to the buttons

    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("answer-buttons");
        button.classList.add("answer-area");
        button.classList.add("answer-area_button");

        answerArea.appendChild(button);

        if (answer.correct) {
            button.dataset.correct = answer.correct;
        }


        // When an answer button is clicked it will call the check answer function
        button.addEventListener("click", checkAnswer);
    });


}


//This is to reset the page so only the current answers are being shown and next button is disabled

function resetPage() {

    nextButton.disabled = true;

    while (answerArea.firstChild) {
        answerArea.removeChild(answerArea.firstChild);
    }
}


// Function to check the answer selected and highlight correct or incorrect answer. calls increment correct of incorrect scores.

function checkAnswer(e) {

    let selectedAnswer = e.target;
    let correctAnswer = selectedAnswer.dataset.correct === "true";

    if (correctAnswer) {
        selectedAnswer.classList.add("correct");
        incrementScore();
    } else {
        selectedAnswer.classList.add("incorrect");
        incrementIncorrectScore();
    }



    Array.from(answerArea.children).forEach(button => {
        if (button.dataset.correct === "true") {
            button.classList.add("correct");
        }

        //stops from selecting another answer and removes hover style over buttons
        button.disabled = true;
        button.classList.remove("answer-area_button");


    });

    // call for next question
    nextButton.disabled = false;
    nextButton.addEventListener("click", nextQuestion);

}


// function to increment the correct score

function incrementScore() {

    document.getElementById("score").innerText = ++correctScore;

}

// function to increment the incorrect score

function incrementIncorrectScore() {

    document.getElementById("incorrect").innerText = ++incorrectScore;

}

// function to display the next question

function nextQuestion() {
    if (questionNumber < questions.length) {
        displayQuestions();

        /**
        * code for progress bar.
        * this code was taken from online trevthedev777 
        * quiz game multiple choice guthub
        * when googled quiz progress bar.
        */
        progressBar.style.width = `${(questionNumber / questions.length) * 100}%`;
    } else {
        displayFinalScore();
    }
}

//function to display the final score when quiz is complete

function displayFinalScore() {

    //Hide original question, answers and next button areas and display play again button

    document.getElementById("answer-area").style.display = "none";
    document.getElementById("next-button").style.display = "none";
    document.getElementById("play-again").style.display = "revert";

    //Display final score

    document.getElementById("question").innerText = `Congratulations!\n You scored ${correctScore} / 15!`;


    //click play again button to start quiz again

    document.getElementById("play-again").addEventListener("click", restartQuiz);

}


//function to reset the page to start quiz again

function restartQuiz() {
    questionNumber = 0;
    document.getElementById("answer-area").style.display = "grid";
    document.getElementById("next-button").style.display = "revert";
    document.getElementById("play-again").style.display = "none";
    document.getElementById("score").innerText = 0;
    document.getElementById("incorrect").innerText = 0;
    correctScore = 0;
    incorrectScore = 0;
    progressBar.style.width = "0%";

    startQuiz();
}






