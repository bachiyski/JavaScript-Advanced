function addItem() {
  const text = document.getElementById("newItemText").value;
  const list = document.getElementById("items");
  let li = document.createElement("li");
  li.textContent = text;
  list.appendChild(li);
}
