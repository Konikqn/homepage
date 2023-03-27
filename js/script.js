console.log("Siemandero!");

let body = document.querySelector(".body");
let firstButton = document.querySelector(".js-button__first");
let themeName = document.querySelector(".js-button__changeText");

firstButton.addEventListener("click", () => {
  body.classList.toggle("body--dark");

  if (body.classList.contains("body--dark")) {
    themeName.innerText = "jasne";
  } else {
    themeName.innerText = "ciemne";
  }
});

let footer = document.querySelector(".footer");
let SecondButton = document.querySelector(".js-button__second");
let themeName2 = document.querySelector(".js-button__changeText2");

SecondButton.addEventListener("click", () => {
  footer.classList.toggle("js-footer__hideFooter");

  themeName2.innerText = foot.classList.contains("js-footer__hideFooter") ? "Włącz" : "Wyłącz";
});