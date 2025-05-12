let index = 1;

const onAdvance = () => {
  document.getElementById(index).classList.add("hide-question");
  index++;
  document.getElementById(index).classList.remove("hide-question");

  if (index > 1) {
    document.getElementById("back-btn").classList.remove("hide-question");
  }
};

const onBack = () => {
  document.getElementById(index).classList.add("hide-question");
  index--;
  document.getElementById(index).classList.remove("hide-question");

  if (index === 1) {
    document.getElementById("back-btn").classList.add("hide-question");
  }
};

const fwdButton = document.getElementById("advance-btn");
fwdButton.addEventListener("click", onAdvance);

const backBtn = document.getElementById("back-btn");
backBtn.addEventListener("click", onBack);
