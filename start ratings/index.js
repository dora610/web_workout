// const ratingEle = document.querySelectorAll('.Shang-Chi input[name="rating"]');
// const ratingTextEle = ratingEle.nextElementSibling;
const movieList = [
  { name: "Shang-Chi", rating: 2 },
  { name: "Udham", rating: 4 },
  { name: "Eternals", rating: 3 },
  { name: "Attack on Titan", rating: 5 },
  { name: "The Lion King", rating: 4 },
];

const tableBody = document.querySelector("tbody");
const ratingBlock = `<form>
<div class="rating">
    <input type="radio" name="rating" value="5" id="5" /><label
        for="5"
        >☆</label
    >
    <input type="radio" name="rating" value="4" id="4" /><label
        for="4"
        >☆</label
    >
    <input type="radio" name="rating" value="3" id="3" /><label
        for="3"
        >☆</label
    >
    <input type="radio" name="rating" value="2" id="2" /><label
        for="2"
        >☆</label
    >
    <input type="radio" name="rating" value="1" id="1" /><label
        for="1"
        >☆</label
    >
</div>
</form>`;

const rowTemplate = (name, rating) =>
  `
<td class="movie-name">${name}</td>
<td id="rating-block">
  <span class="number-rating">${rating}</span>
</td>`;

const generateTableRow = ({ name, rating }) => {
  const tableRow = document.createElement("tr");

  tableRow.innerHTML = rowTemplate(name, rating);
  tableRow
    .querySelector("#rating-block")
    .insertAdjacentHTML("afterbegin", ratingBlock);

  tableRow
    .querySelectorAll('#rating-block input[name="rating"]')
    [5 - rating].setAttribute("checked", true);

  console.log(tableRow.querySelectorAll('#rating-block input[name="rating"]'));

  return tableRow;
};

movieList.forEach((ele) => {
  tableBody.insertAdjacentElement("beforeend", generateTableRow(ele));
});
