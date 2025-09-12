const display = document.getElementById("display");
const buttons = document.querySelectorAll("button");

buttons.forEach(button => {
  button.addEventListener("click", () => {
    const value = button.textContent;

    if (value === "C") {
      display.value = "";
    } else if (value === "⬅️") {
      display.value = display.value.slice(0, -1);
    } else if (value === "=") {
      try {
        // Replace × and ÷ with JS operators
        let expression = display.value.replace(/×/g, "*").replace(/÷/g, "/");
        display.value = eval(expression);
      } catch {
        display.value = "Error";
      }
    } else {
      display.value += value;
    }
  });
});

// Allow keyboard input
document.addEventListener("keydown", (e) => {
  if (/[0-9+\-*/().]/.test(e.key)) {
    display.value += e.key;
  } else if (e.key === "Enter") {
    try {
      display.value = eval(display.value);
    } catch {
      display.value = "Error";
    }
  } else if (e.key === "Backspace") {
    display.value = display.value.slice(0, -1);
  } else if (e.key === "Escape") {
    display.value = "";
  }
});