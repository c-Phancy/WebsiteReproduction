const buttons = document.querySelectorAll("button");

buttons.forEach((button) => {
  button.addEventListener("click", function () {
    buttons.forEach((item) => item.classList.remove("active"));
    this.classList.add("active");
  });
});

const cards = document.getElementsByClassName('card');


function show(e) {
  var e = document.getElementsByClassName(e);
  for (let i = 0; i < cards.length; i++) {
    cards[i].style.display = "none";
  }
  for (let i = 0; i < e.length; i++) {
    e[i].style.display = "block";
  }
}