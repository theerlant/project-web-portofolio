const titleContent = [
  "<h1>Halo, saya Theerlan.</h1>",
  "<h2>Front-end Developer</h2>",
  "<h3>Saya mendesain dan membangun website.</h3>",
];
const titleContainerRef = document.querySelector("#hero");

// titleRef.textContent += "<h1>" + titleContent + "</h1>";

let contentIndex = 0;
let charIndex = 0;
let childRef = null;
function titleAnimation() {
  if (charIndex >= titleContent[contentIndex].length) {
    // Convert text content to html element
    // copy element ref sebelum kita null
    const convElement = childRef;
    const elem = titleContent[contentIndex];

    childRef = null;

    setTimeout(() => {
      convElement.classList.value = "";
      convElement.textContent = "";
      convElement.innerHTML = elem;
    }, 150);

    contentIndex++;
    charIndex = 0;

    if (contentIndex >= titleContent.length) {
      return;
    }
  }

  if (childRef === null) {
    childRef = document.createElement("div");
    childRef.classList.add("mono");
    titleContainerRef.appendChild(childRef);
  }

  childRef.textContent += titleContent[contentIndex].charAt(charIndex);
  charIndex++;

  setTimeout(() => {
    titleAnimation();
  }, 50);
}

titleAnimation();
