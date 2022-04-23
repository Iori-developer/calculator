let buttons = Array.from(document.getElementsByClassName("button"));
let display = document.querySelector(".display");

buttons.forEach((button) => {
  button.addEventListener("click", function (e) {
    if (display.innerText === "Error!") display.innerText = "";
    switch (e.target.innerText) {
      case "C":
        display.innerText = "";
        break;
      case "=":
        try {
          if (eval(display.innerText) !== undefined)
            display.innerText = eval(display.innerText);
        } catch {
          display.innerText = "Error!";
        }
        break;
      default:
        display.innerText += e.target.innerText;
    }
  });
});
