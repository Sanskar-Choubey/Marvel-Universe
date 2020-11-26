var readlineSync = require("readline-sync");
var chalk = require('chalk');

var userName = readlineSync.question(chalk.green("Provide your name to participate! "));
console.log(chalk.green("***********************"));
console.log(chalk.yellow("Welcome" + " " + userName + " to the Quiz World"));
console.log(chalk.green("***********************"));
 var score = 0;

function quiz(question,answer){
  var userAnswer = readlineSync.question(question);

  if (userAnswer === answer){
    console.log(chalk.green("Hurray! You're Right"));
    score = score + 1;
  }
  else{
    console.log(chalk.green("Sorry,you're wrong"));
  }

  console.log(chalk.yellow("Score : ",score));
  console.log(chalk.green("**************************"));
}

var questionOne = {
  question :"What year was the first Iron Man movie released, kicking off the Marvel Cinematic Universe? ",
  answer : "2008",
}

var questionTwo = {
  question:" Which Avenger does Thor team up with in Thor: Ragnarok? ",
  answer:"Hulk",
}

var questionThree = {
  question:"In which fictional country is Black Panther set? ",
  answer:"Wakanda",
}

var questionFourth = {
  question:"In which film did Black Widow first appear? ",
  answer:"Iron Man 2",
}

var questionFifth = {
  question:"In which film did Spider-Man make his first appearance in the MCU? ",
  answer:"Captain America:Civil War",
}

var questionSixth = {
  question:"What is the Falcon’s real name?",
  answer:"Sam Wilson",
}

var questionSeventh = {
  question:"What is the name of Tony Stark’s A.I. assistant, who becomes the basis of The Vision? ",
  answer:"JARVIS"
}

var questionEighth = {
  question:"What is Ant Man’s real name? ",
  answer:"Scott Lang"
}

var questionNinth = {
  question:"What is the name of Dr Strange’s mentor? ",
  answer:"The Ancient One",
}

var questionTenth = {
  question:"Who is killed by Loki in Avengers Assemble? ",
  answer:"Agent Coulson",
}

//array of questions
var  questions = [questionOne,questionTwo,questionThree,questionFourth,questionFifth,questionSixth,questionSeventh,questionEighth,questionNinth,questionTenth];

//loops
for (i=0;i<questions.length;i++){
   var currentQuestion = questions[i];
   quiz(currentQuestion.question,currentQuestion.answer);
}

var highScore = [
   {name:"Ashray",
   score:9},
   
   {name:"Sammy",
   score:8},

   {name:"Karan",
   score:5},
   ]

console.log(chalk.yellow("\n***********LEADERBOARD**********\n"));

for (var i=0;i<highScore.length;i++){
var newScore = highScore[i];
console.log(chalk.green(newScore.name, newScore.score));
}

console.log("*****************************");
console.log(chalk.green("Hurray!Your score is: ",score));

//checking the score board
if(score===10){
  console.log(chalk.green("Congrats you have beaten the highest score " + score + ", Send me the screenshot"));
}
else{
  console.log(chalk.green("Nice Try!"));
}