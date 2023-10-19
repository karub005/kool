// Selecting and adding the mousemove or mouse follow...
let text = document.querySelector(".text");

// Split text into Letters...
text.innerHTML = text.textContent.replace(/\S/g, "<span>$&</span>");

let element = document.querySelectorAll("span");
for (let i = 0; i < element.length; i++) {
  element[i].style.transform = "rotate(" + i * 18 + "deg)";
}

document.addEventListener("mousemove", function (e) {
  text.style.left = e.pageX + "px";
  text.style.top = e.pageY + "px";
  text.style.transform = `rotate(${e.pageX / 2}deg) rotate(${e.pageY / 2}deg)`;
});
