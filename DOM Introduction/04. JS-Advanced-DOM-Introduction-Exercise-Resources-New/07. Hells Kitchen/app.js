function solve() {
  document.querySelector("#btnSend").addEventListener("click", onClick);

  function onClick() {
    const textArea = JSON.parse(
      document.querySelector("#inputs textarea").value
    );
    const restaurants = Array.from(
      document.querySelector("#bestRestaurant").children
    );
    const workers = Array.from(document.querySelector("#workers").children);
    for (const rest of textArea) {
      let [restaurant, workers] = rest.split(" - ");
      workers = workers.split(", ").map((e) => e.split(" "));
      console.log(workers);
    }
  }
}

//["PizzaHut - Peter 500, George 300, Mark 800",
//"TheLake - Bob 1300, Joe 780, Jane 660"]
