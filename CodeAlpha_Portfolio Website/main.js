// 🔥 Typing Animation
const text = ["Web Developer", "Frontend Developer", "Freelancer"];
let i = 0;
let j = 0;
let current = "";
let isDeleting = false;

function type() {
  current = text[i];

  if (isDeleting) {
    document.getElementById("typing").innerHTML =
      current.substring(0, j--);
  } else {
    document.getElementById("typing").innerHTML =
      current.substring(0, j++);
  }

  if (!isDeleting && j === current.length) {
    isDeleting = true;
    setTimeout(type, 1000);
    return;
  }

  if (isDeleting && j === 0) {
    isDeleting = false;
    i++;
    if (i === text.length) i = 0;
  }

  setTimeout(type, isDeleting ? 50 : 100);
}

type();


// 🔥 Smooth Scroll
document.querySelectorAll("nav a").forEach(link => {
  link.addEventListener("click", function(e) {
    e.preventDefault();
    document.querySelector(this.getAttribute("href"))
      .scrollIntoView({ behavior: "smooth" });
  });
});