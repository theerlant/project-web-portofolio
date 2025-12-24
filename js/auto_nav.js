// Scroll Listener dan set nav link aktif secara dinamis
const mainRef = document.querySelector("main");
const mainRect = mainRef.getBoundingClientRect();

// Ambil semua nav links
const navRef = document.querySelector("nav");
const navLinks = navRef.querySelectorAll("a");

// Ambil referensi section yang diperlukan
const portoRef = document.querySelector("#portofolio");
const whyMeRef = document.querySelector("#why-hire-me");
const contactRef = document.querySelector("#get-in-touch");
const sections = [portoRef, whyMeRef, contactRef];

// Setup even listener di main
mainRef.addEventListener("scroll", (e) => {
  let activeIndex = 0;
  const offset = 300;

  // edge case saat end of scroll
  if (mainRef.scrollHeight - mainRef.scrollTop <= mainRef.clientHeight + 100) {
    activeIndex = sections.length;
  } else {
    // Loop dari belakang untuk mencari section terakhir yang sudah melewati batas
    for (let i = sections.length - 1; i >= 0; i--) {
      const section = sections[i];

      const offsetTop = section.offsetTop - offset;

      if (mainRef.scrollTop > offsetTop) {
        activeIndex = i + 1; // +1 karena index 0 untuk about me
        break;
      }
    }
  }

  navLinks.forEach((navLink, i) => {
    if (i === activeIndex) {
      navLink.setAttribute("aria-current", "true");
    } else {
      navLink.removeAttribute("aria-current");
    }
  });
});
