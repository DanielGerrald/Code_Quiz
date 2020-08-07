var seconds=60;
var timer;
var questionEl = document.getElementById("question");
var answerA = document.getElementById("A");
var answerB = document.getElementById("B");
var answerC = document.getElementById("C");
var answerD = document.getElementById("D");
var cardBody = document.querySelector(".card-body")
var userForm = document.querySelector("#user-form")
var initials = document.getElementById("initials")
var highScores = [];



var quiz = {
  question:["From what King’s Cross platform does the Hogwarts Express leave?","Who guards the entrance to the Gryffindor common room?","Which is NOT a form of currency in the wizarding world?","What does Mrs. Weasley give Harry for Christmas every year?","What is the model of the first broom Harry ever receives?"],
  answers:["A) Eight and One-quarter", "B) Nine and Three-quarters", "C) Five and a Half", "D) Eleven","A) The Grey Lady", "B) The Fat Friar", "C) The Bloody Baron", "D) The Fat Lady","A) Doxies", "B) Sickles", "C) Knuts", "D) Galleons","A) Bertie Bott’s every flavour beans", "B) Chocolate frogs", "C) A fruit cake", "D) A new sweater","A) Cleansweep One", "B) Nimbus 2000", "C) Hoover", "D) Firebolt"],
  correct:["B", "D", "A", "D", "B"],
}   



function timerStart() {
  if(seconds <= 60) {
    document.getElementById("timer").innerHTML = seconds;
  }
  if (seconds > 0 && ques <= 3) {
    seconds--;
  } 
  else {
    clearInterval(timer);
    return;
  }
}
document.getElementById("start").onclick = function() {
  if(!timer) {
    timer = window.setInterval(function() {
      document.getElementById("start").style.display = "none";
      document.getElementById("navTimer").removeAttribute("style");
      answerA.removeAttribute("style");
      answerB.removeAttribute("style");
      answerC.removeAttribute("style");
      answerD.removeAttribute("style");
      timerStart();
      replace();
    }, 1000);
  }
}

var ques = 0;
var choi = 0;

cardBody.addEventListener("click", function(event) {
  event.preventDefault();
  if (event.target.matches("button") === true) {
    var theirAnswer = event.target.getAttribute("id");
    //console.log(theirAnswer)
  }
  if (theirAnswer === quiz.correct[ques] && ques <=3 && seconds > 0){
    ques++;
    choi += 4;
    replace();
    //console.log(choi)
  }
  else if (ques <= 3 && seconds > 0){
    ques++;
    choi += 4;
    seconds -= 15;
    replace();
  }
  else {
    answerA.style.display = 'none';
    answerB.style.display = 'none';
    answerC.style.display = 'none';
    answerD.style.display = 'none';
    userForm.removeAttribute("style");
  }
});
  
userForm.addEventListener("click", function(event) {
  event.preventDefault();
  if (event.target.matches("button") === true) {

    //storeUser();
    storeHighScores();
  }
});

function replace() {
  questionEl.innerHTML = quiz.question[ques];
  answerA.innerHTML = quiz.answers[choi];
  answerB.innerHTML = quiz.answers[choi + 1]; 
  answerC.innerHTML = quiz.answers[choi + 2];
  answerD.innerHTML = quiz.answers[choi + 3];
};

function storeHighScores() {
  var temp = JSON.parse(localStorage.getItem("highScores"));
  if (temp !== null) {
    highScores.push(temp)
  }
      highScores.push(initials.value);
      highScores.push(seconds);
  console.log(highScores);

  localStorage.setItem("highScores", JSON.stringify(highScores));
}

