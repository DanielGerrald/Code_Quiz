var seconds=60;
var timer;

       /* var arr = {
            question:"From what King’s Cross platform does the Hogwarts Express leave?", "Who guards the entrance to the Gryffindor common room?", "Which is NOT a form of currency in the wizarding world?", "What does Mrs. Weasley give Harry for Christmas every year?", "What is the model of the first broom Harry ever receives?"
            answers:""
        }
        */








function myFunction() {
  if(seconds < 60) { // I want it to say 1:00, not 60
    document.getElementById("timer").innerHTML = seconds;
  }
  if (seconds >0 ) { // so it doesn't go to -1
     seconds--;
  } else {
     clearInterval(timer);
     alert("Times Up!");
  }
}
document.getElementById("start").onclick = function() {
    if(!timer) {
      timer = window.setInterval(function() {
        myFunction();
      }, 1000);
    }
  }

document.getElementById("timer").innerHTML="1:00"; 