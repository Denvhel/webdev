const link = document.getElementById("link");
const initialFontSize = parseInt(getComputedStyle(link).getPropertyValue('font-size'));

link.addEventListener("mouseover", function() {
  link.style.fontSize = `${initialFontSize + 10}px`;
});

link.addEventListener("mouseout", function() {
  link.style.fontSize = `${initialFontSize}px`;
});