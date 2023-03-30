function buy(e) {
    var x = document.getElementById(e);
    var name_game = x.value;
    console.log(name_game);
}
function typeCard(e) {
    var x = document.getElementById(e);
    var name_card = x.value;
    console.log(name_card);
}
const labelGame = document.querySelectorAll("#typeGame");

labelGame.forEach(label => label.addEventListener("click", () => {
    labelGame.forEach(otherLabel => otherLabel.classList.remove("active"));
    label.classList.add("active");
})); 

const labelCard = document.querySelectorAll("#cardType");
labelCard.forEach(label => label.addEventListener("click", () => {
    labelCard.forEach(otherLabel => otherLabel.classList.remove("show-active"));
    label.classList.add("show-active");
})); 
function OpenMenu()
{
    var x = document.getElementById("MenuMobile");

  if (x.className === "menu-hide") {
    x.className += " opened";
  } else {
    x.className = "menu-hide";
  }
}