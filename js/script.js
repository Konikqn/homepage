{
  const welcome = () => {
    console.log("Siemandero!");
  }

  const onChangeBackgroundClick = () => {
    const body = document.querySelector(".body");
    const themeName = document.querySelector(".js-button__changeText");

    body.classList.toggle("body--dark");
    themeName.innerText = body.classList.contains("body--dark") ? "ciemne" : "jasne";
  }

  const onChangeFooterClick = () => {
    const footer = document.querySelector(".footer");
    const themeName2 = document.querySelector(".js-button__changeText2");
    footer.classList.toggle("js-footer__hideFooter");
    themeName2.innerText = footer.classList.contains("js-footer__hideFooter") ? "Włącz" : "Wyłącz";
  }

  const init = () => {
    const firstButton = document.querySelector(".js-button__first");
    firstButton.addEventListener("click", onChangeBackgroundClick);

    const SecondButton = document.querySelector(".js-button__second");
    SecondButton.addEventListener("click", onChangeFooterClick);
    welcome();
  };

  init();
}