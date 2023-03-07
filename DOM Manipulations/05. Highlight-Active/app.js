function focused() {
  const textFields = Array.from(document.querySelectorAll("input"));
  for (const text of textFields) {
    text.addEventListener("focus", onClick);
    text.addEventListener("blur", onBlur);
  }

  function onClick(ev) {
    ev.target.parentElement.classList = "focused";
  }
  function onBlur(ev) {
    ev.target.parentElement.classList = "";
  }
}
