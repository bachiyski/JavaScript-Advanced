function attachGradientEvents() {
  const gradient = document.getElementById("gradient");
  gradient.addEventListener("mousemove", move);
  const result = document.getElementById("result");
  function move(ev) {
    let sum = Math.floor((ev.offsetX / gradient.clientWidth) * 100);
    result.textContent = `${sum}%`;
  }
}
