let highScores;
let arr = [];

document.getElementById("Clear").onclick = function () {
  document.getElementById("list").innerHTML = "";
  window.localStorage.clear();
  console.log("done");
};

if (localStorage.getItem("highScores") !== null) {
  highScores = localStorage.getItem("highScores");
  arr = highScores.split(",");
  // console.log(arr);
  renderScores();
}

function renderScores() {
  for (var i = 0; i < arr.length; ) {
    var li = document.createElement("li");
    li.textContent = arr[i] + " - " + arr[i + 1];
    li.setAttribute("class", "list-group-item  list-group-item-action list-group-item-warning");
    li.setAttribute("data-index", i);
    i += 2;
    list.appendChild(li);
  }
}
