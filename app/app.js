function login() {
  $(".login-toggle").on("click", () => {
    $(".hamburger-menu").toggle();
    $(".login-wrapper").toggle();
    $("footer").toggle();
    $(".navBar").toggle();
    $(".login-toggle").toggle();

    console.log("HELLLOOOOOO");
  });
}

function exit() {
  $(".exit").on("click", () => {
    $(".hamburger-menu").toggle();
    $(".login-wrapper").toggle();
    $("footer").toggle();
    $(".navBar").toggle();
    $(".login-toggle").toggle();

    console.log("HELLLOOOOOO");
  });
}

$(document).ready(() => {
  login();
  exit();

  //   console.log("HELLLOOOOOO");
});
