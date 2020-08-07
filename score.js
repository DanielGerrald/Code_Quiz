var score;
var user;
var list = document.querySelector("#list");


highScores = JSON.parse(localStorage.getItem("highScores"));
renderScores();

function renderScores() {
    for (var i = 1; i < highScores.length;) {
      var li = document.createElement("li");
      li.textContent = (highScores[i] + " - " + highScores[i +1]);
      li.setAttribute("class", "list-group-item");
      li.setAttribute("data-index", i);
      i++;
      list.appendChild(li);
    }
  }