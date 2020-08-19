var score;
var user;



if (localStorage.getItem("highScores") !== null){
  highScores = JSON.parse(localStorage.getItem("highScores"));
renderScores();
}

function renderScores() {
    for (var i = 0; i < highScores.length;) {
      var li = document.createElement("li");
      li.textContent = (highScores[i] + " - " + highScores[i +1]);
      li.setAttribute("class", "list-group-item");
      li.setAttribute("data-index", i);
      i += 2;
      list.appendChild(li);
    }
  }

  document.getElementById("Clear").onclick = function(){
    document.getElementById("list").innerHTML = "";
    localStorage.clear();
  };
