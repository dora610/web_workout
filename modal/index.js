const cardButtons = document.querySelectorAll(".card button");
const outerModal = document.querySelector(".modal-outer");
const innerModal = document.querySelector(".modal-inner");

function handleCardButtonClick(e) {
  const card = e.currentTarget.closest(".card");
  const imgSrc = card.querySelector("img").src;
  const title = card.querySelector("h2").innerText;
  const desc = card.dataset.description;

  const html = `
    <img height=400px width=400px src="${imgSrc.replace(
      "200",
      "400"
    )}" alt="${title}" srcset="" />
    <h2>${title}</h2>
    <p>${desc}</p>
  `;

  innerModal.insertAdjacentHTML("afterbegin", html);
  outerModal.classList.add("open");
}

function closeModal() {
  outerModal.classList.remove("open");
  innerModal.innerHTML = ``;
}

function handleModalClick(e) {
  /* if (e.target === e.currentTarget) {
    outerModal.classList.remove("open");
  } */
  !e.target.closest(".modal-inner") && closeModal();
}

cardButtons.forEach((btn) =>
  btn.addEventListener("click", handleCardButtonClick)
);

window.addEventListener("keydown", (e) => {
  if (e.key === "Escape") closeModal();
});

outerModal.addEventListener("click", handleModalClick);
