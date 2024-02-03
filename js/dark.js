const darkModeToggle = document.getElementById("darkModeToggle");
const button = document.querySelector(".button button");
const img = document.getElementById("darkModeToggle");

document.addEventListener("DOMContentLoaded", function() {
  let isDarkMode = false;

  darkModeToggle.addEventListener("click", function() {
    isDarkMode = !isDarkMode;

    document.body.classList.toggle("dark-mode", isDarkMode);
    button.classList.toggle("active", isDarkMode);

    // 이미지 속성 변경
    let newSrc;
    if (isDarkMode) {
      newSrc = "/asset/moon.png";
    } else {
      newSrc = "/asset/sun.png";
    }
    img.setAttribute("src", newSrc);
  });
});

