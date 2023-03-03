function solve() {
  const textArray = document
    .getElementById("input")
    .value.split(".")
    .filter((e) => e != "");
  const textOutput = document.getElementById("output");
  let arr = [];
  let counter = 0;
  if (textArray.length > 0) {
    for (const text of textArray) {
      arr.push(text);
      counter++;
      if (arr.length == 3) {
        let p = document.createElement("p");
        p.textContent = arr.join(". ") + ".";
        textOutput.appendChild(p);
        arr = [];
      }
    }
    if (arr.length > 0) {
      let p = document.createElement("p");
      p.textContent = arr.join(". ") + ".";
      textOutput.appendChild(p);
    }
  }
}
