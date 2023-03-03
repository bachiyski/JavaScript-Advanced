function solve() {
  document.querySelector("#searchBtn").addEventListener("click", onClick);
  const rows = Array.from(document.querySelectorAll("tbody tr"));
  let searchField = document.getElementById("searchField");
  function onClick() {
    for (let row of rows) {
      row.classList.remove("select");
      if (row.innerHTML.includes(searchField.value)) {
        row.classList.add("select");
      }
    }
    searchField.value = "";
  }
}
