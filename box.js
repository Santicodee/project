//for trial projects//
const modal = document.querySelector(".hidden");
const overlay = document.querySelector(".overlay");
const close = document.querySelector(".close");
const open = document.querySelector(".show-modal");
const dicegame = document.querySelector(".dice-game");

open.addEventListener("click", function () {
  $(".dice-game").slideDown();
  modal.classList.remove("hidden");
  overlay.classList.remove("hidden");
});

close.addEventListener("click", function () {
  $(".dice-game").slideUp();
  modal.classList.add("hidden");
});
