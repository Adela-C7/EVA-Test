let mouseCursor = document.querySelector(".cursor");
// let navLinks = document.querySelectorAll(".navbar-nav li");

window.addEventListener("mousemove", cursor);

function cursor(e) {
  mouseCursor.style.top = e.pageY + "px";
  mouseCursor.style.left = e.pageX + "px";
}
