const input = require('readline-sync');

// TODO 2: modify your quiz app to ask 5 questions //

// TODO 1.1a: Define candidateName // 
let candidateName = "";
// TODO 1.2a: Define question, correctAnswer, and candidateAnswer //
let question = "Who was the first American woman in space? ";
let correctAnswer = "Sally Ride";
let candidateAnswer;
let questions = [
  "Who was the first American woman in space? ",
  "True or false: 5000 meters = 5 kilometers. ",
  "(5 + 3)/2 * 10 = ? ",
  "Given the array [8, 'Orbit', 'Trajectory', 45], what entry is at index 2? ",
  "What is the minimum crew size for the ISS? ",
];
let correctAnswers = [
  "Sally Ride",
  "True",
  "40",
  "Trajectory",
  "3",
];
let candidateAnswers = [];


function askForName() {
  // TODO 1.1b: Ask for candidate's name //
  candidateName = input.question("What is your name? ");
}

function askQuestion() {
  // TODO 1.2b: Ask candidate the question and assign the response as candidateAnswer //


  for (let i = 0; i < questions.length; i++) {
    candidateAnswers.push(input.question(questions[i]));
  }
  

}

function gradeQuiz(candidateAnswers) {

  // TODO 1.2c: Let the candidate know if they have answered the question correctly or incorrectly // 

  console.clear();
  console.log(`
Candidate Name: ${candidateName}
1.) ${questions[0]}
Your answer: ${candidateAnswers[0]}
Correct answer: ${correctAnswers[0]}

2.) ${questions[1]}
Your answer: ${candidateAnswers[1]}
Correct answer: ${correctAnswers[1]}

3.) ${questions[2]}
Your answer: ${candidateAnswers[2]}
Correct answer: ${correctAnswers[2]}

4.) ${questions[3]}
Your answer: ${candidateAnswers[3]}
Correct answer: ${correctAnswers[3]}

5.) ${questions[4]}
Your answer: ${candidateAnswers[4]}
Correct answer: ${correctAnswers[4]}
`);

  let grade;

  grade = 0;

  if (candidateAnswers[0].toLowerCase() === correctAnswers[0].toLowerCase()) {
    grade = grade + 1
  }

  if (candidateAnswers[1].toLowerCase() === correctAnswers[1].toLowerCase()) {
    grade = grade + 1
  }

  if (candidateAnswers[2] === correctAnswers[2]) {
    grade = grade + 1
  }

  if (candidateAnswers[3].toLowerCase() === correctAnswers[3].toLowerCase()) {
    grade = grade + 1
  }

  if (candidateAnswers[4] === correctAnswers[4]) {
    grade = grade + 1
  }

  let status = "";

  if (grade >= 4) {
    status = "PASSED"
  } else {
    status = "FAILED"
  }

  console.log(`>>> Overall Grade: ${grade / 5 * 100}% (${grade} of 5 responses correct <<<
>>> Status: ${status} <<<`);


  return grade;
}

function runProgram() {
  askForName();
  // TODO 1.1c: Ask for candidate's name //
  console.log(`Hello, ${candidateName}!`);
  askQuestion();
  gradeQuiz(this.candidateAnswers);
}

// Don't write any code below this line //
// And don't change these or your program will not run as expected //
module.exports = {
  candidateName: candidateName,
  question: question,
  correctAnswer: correctAnswer,
  candidateAnswer: candidateAnswer,
  questions: questions,
  correctAnswers: correctAnswers,
  candidateAnswers: candidateAnswers,
  gradeQuiz: gradeQuiz,
  runProgram: runProgram
};