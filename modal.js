const VIEW_SEATS = document.querySelector(".view-Modal-Btn");
const MODAL = document.querySelector(".view-modal");
const CLOSE_BTN = document.querySelector(".close_btn");

// Events

VIEW_SEATS.addEventListener("click", (e) => {
  MODAL.classList.toggle("active");
});

CLOSE_BTN.addEventListener("click", (e) => {
  MODAL.classList.toggle("active");
});
