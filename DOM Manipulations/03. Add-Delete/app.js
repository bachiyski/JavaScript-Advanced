function addItem() {
  const newItems = document.getElementById("newItemText");
  const items = document.getElementById("items");
  const li = document.createElement("li");
  li.textContent = newItems.value;
  items.appendChild(li);
  newItems.value = "";
  const deleteButton = document.createElement("a");
  deleteButton.textContent = "[Delete]";
  deleteButton.href = "#";
  li.appendChild(deleteButton);
  deleteButton.addEventListener("click", delItem);
  function delItem(event) {
    event.target.parentNode.remove();
  }
}
