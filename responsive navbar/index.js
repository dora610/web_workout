const navToggler = document.querySelector(".nav-toggler");
const navbar = document.querySelector("nav");
const navEle = document.querySelectorAll(".brand-name ~ a");

navToggler.addEventListener("click", () => {
  navbar.classList.toggle("collapse");
  navbar.classList.toggle("bg-change");
  let buttonIcon = Array.from(navbar.classList).includes("collapse")
    ? "./assets/xmark-solid.svg"
    : "./assets/bars-solid.svg";
  navToggler.querySelector("img").setAttribute("src", buttonIcon);
  navEle.forEach((e) => e.classList.toggle("show"));
});

const copyBtn = document.querySelector(".clipboard-copy");
copyBtn.addEventListener("click", () => {
  navigator.clipboard.writeText("Some text").then(() => {
    document.querySelector(".message").textContent =
      "Successfully copied to clipboard";
  });
});
