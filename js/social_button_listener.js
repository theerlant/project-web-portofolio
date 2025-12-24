const socialMediaRef = document.querySelector("#social-media");
const socialMedias = socialMediaRef.querySelectorAll("a");

socialMedias.forEach((element) => {
  const spanText = element.querySelector("span");
  element.addEventListener("mouseenter", () => {
    spanText.classList.add("show");
  });
  element.addEventListener("mouseleave", () => {
    spanText.classList.remove("show");
  });
});
