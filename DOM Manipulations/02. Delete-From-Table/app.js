function deleteByEmail() {
  const rows = document.querySelectorAll("tbody tr");
  const text = document.querySelector('input[name="email"]').value;
  const result = document.getElementById("result");
  for (const row of rows) {
    if (row.children[1].textContent == text) {
      row.remove();
      result.textContent = "Deleted.";
    } else {
      result.textContent = "Not found.";
    }
  }
}
