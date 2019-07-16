// var array with the questions and options and answers
var questions = [
  {
    question: "Where was the fortune cookie invented?",
    option1: "China",
    option2: "Russia",
    option3: "America",
    option4: "Australia",
    answer: "3"
  },
  {
    question:
      "Mark Zuckerberg was one of the founders of which social networking site?",
    option1: "Twitter",
    option2: "Tumblr",
    option3: "MySpace",
    option4: "Facebook",
    answer: "4"
  },
  {
    question:
      "Which fast food restaurant chain once tested bubble gum broccoli as a children’s menu item?",
    option1: "Mcdonalds",
    option2: "KFC",
    option3: "BurgerKing",
    option4: "PizzaHut",
    answer: "1"
  },
  {
    question:
      "Who is the only basketball player to score 100 points in a single NBA game?",
    option1: "Travis Scot",
    option2: "Kawahi Leonard",
    option3: "Lebron James",
    option4: "Wilt Chambelain",
    answer: "4"
  },
  {
    question: "What is the secret identity of the fictional superhero Batman?",
    option1: "Peter Parker",
    option2: "Peter Pan",
    option3: "Bruce Wayne",
    option4: "Clark Kent",
    answer: "3"
  }
];
// Initializing variables
var currentQuestion = 0;
var score = 0;
var totalQuestions = questions.length;

var container = document.getElementById("quizContainer");
var question = document.getElementById("question");
var option1 = document.getElementById("opt1");
var option2 = document.getElementById("opt2");
var option3 = document.getElementById("opt3");
var option4 = document.getElementById("opt4");
var nextbtn = document.getElementById("nxt");
var result = document.getElementById("result");
var help = document.getElementById("help");
var reset = document.getElementById("reset");

//event listener to display the hint when clicked and hide it when hoverd.
help.addEventListener("click", function() {
  document.getElementById("hint").style.visibility = "visible";
});
help.addEventListener("mouseover", function() {
  document.getElementById("hint").style.visibility = "hidden";
});
// simple restart function
function restart() {
  window.location.reload();
}

//function that loads the questinons from the array
function loadQuestion(questionsIndex) {
  var load = questions[questionsIndex];
  question.textContent = questionsIndex + 1 + "." + load.question;
  option1.textContent = load.option1;
  option2.textContent = load.option2;
  option3.textContent = load.option3;
  option4.textContent = load.option4;
}

function loadNextQuestion() {
  //makes sure an option is selected, if user hits next without selecting an answer , an alert pops up.
  var selectedOption = document.querySelector("input[type=radio]:checked");
  if (!selectedOption) {
    alert("please select an answer!");
    return;
  }
  //counter for the final score
  var answer = selectedOption.value;
  if (questions[currentQuestion].answer == answer) {
    score += 1;
  }
  selectedOption.checked = false;
  currentQuestion++;
  //changes the next button text to finish on the last question.
  if (currentQuestion == totalQuestions - 1) {
    nextbtn.textContent = "Finish!";
  }
  //displays the result div once the quizz is done.
  if (currentQuestion == totalQuestions) {
    container.style.display = "none";
    result.style.display = "";
    result.textContent = "Your Score:" + score;
    return;
  }
  loadQuestion(currentQuestion);
}
loadQuestion(currentQuestion); //loads the function
