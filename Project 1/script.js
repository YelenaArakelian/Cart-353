const photo = document.getElementById("photo");
const memory = document.getElementById("memory");

photo.addEventListener("mouseenter", () => {
  memory.style.display = "block";
});

photo.addEventListener("mouseleave", () => {
  memory.style.display = "none";
});
