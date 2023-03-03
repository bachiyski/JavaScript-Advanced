function search() {
  const towns = Array.from(document.getElementById("towns").children);
  const searchText = document.getElementById("searchText").value;
  const result = document.getElementById("result");
  let counter = 0;
  for (const town of towns) {
    if (town.textContent.includes(searchText)) {
      town.style.textDecoration = "underline";
      town.style.fontWeight = "bold";
      counter++;
    } else {
      town.style.textDecoration = "";
      town.style.fontWeight = "";
    }
  }
  result.textContent = `${counter} matches found`;
}
