window.onload = function () {
  let calculator = document.querySelector(".calculator");
  let keys = calculator.querySelector(".calculator__keys");
  const display = document.querySelector(".calculator__display");

  keys.addEventListener("click", function (e) {
    if (e.target.matches("button")) {
      const key = e.target;
      const action = key.dataset.action;
      const keyContent = key.textContent;
      const displayedNum = display.textContent;

      if (!action) {
        if (displayedNum === "0") {
          display.textContent = keyContent;
        } else {
          display.textContent = displayedNum + keyContent;
        }
      }

      if (
        action === "add" ||
        action === "subtract" ||
        action === "multiply" ||
        action === "divide"
      ) {
        console.log("operator key!");
      }

      if (action === "decimal") {
        console.log("decimal key!");
      }

      if (action === "clear") {
        console.log("clear key");
      }

      if (action === "calculate") {
        console.log("calculate key");
      }
    }
  });
};
