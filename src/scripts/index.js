import "../styles/main.scss";

setTimeout(init, 60000);

function init() {
  let modal = document.getElementById("myModal");
  let close = document.querySelector(".close");

  modal.style.display = "block";
  close.addEventListener("click", () => {
    modal.style.display = "none";
  });
}
