let currentContent = document.querySelector(".currentContent");
let answerContent = document.querySelector(".answerContent");
let buttons = document.querySelectorAll("button");
let clear = document.querySelector("#clear");
let back = document.querySelector("#back");
let evaluate = document.querySelector("#evaluate");

let flag = 0;
let realtimeScreenArray = [];

clear.addEventListener("click", () => {
  realtimeScreenArray = [""];
  answerContent.innerHTML = 0;
  currentContent.innerHTML = 0;
  currentContent.className = "currentContent";
  answerContent.className = "answerContent";
});
buttons.forEach((btn) => {
  btn.addEventListener("click", () => {
    answerContent.style.visibility = "visible";
    answerContent.style.fontSize = "medium";
    if (!btn.id.match("clear") && !btn.id.match("back")) {
      currentContent.className = "currentContent";
      answerContent.className = "answerContent";
      realtimeScreenArray.push(btn.value);
      currentContent.innerHTML = realtimeScreenArray.join("");
      if (btn.classList.contains("numberButton")) {
        answerContent.innerHTML = eval(realtimeScreenArray.join(""));
      }
    }
    if (btn.id.match("back")) {
      realtimeScreenArray.pop();
      currentContent.innerHTML = realtimeScreenArray.join("");
      const copyRealtimeScreenArray = [...realtimeScreenArray];
      if (realtimeScreenArray.length > 1) {
        copyRealtimeScreenArray.pop();
        answerContent.innerHTML = eval(copyRealtimeScreenArray.join(""));
      } else answerContent.innerHTML = eval(realtimeScreenArray.join(""));
    }
    if (btn.id.match("evaluate")) {
      currentContent.className = "answerContent";
      answerContent.className = "currentContent";
      answerContent.style.color = "white";
      answerContent.style.fontSize = "x-large";
      currentContent.style.fontSize = "medium";
      flag = 1;
      realtimeScreenArray = [];
      realtimeScreenArray.push(answerContent.innerHTML);
    }
    if (typeof eval(realtimeScreenArray.join("")) == "undefined") {
      answerContent.innerHTML = 0;
    }
  });
});

$(document).ready(function () {
  let container = $("#container");
  container.animate({ opacity: ".9" }, "slow");
  container.animate({ opacity: "1" }, "slow");
});
