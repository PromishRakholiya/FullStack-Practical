const counterEl = document.getElementById("counter");
const increaseBtn = document.getElementById("increase");
const decreaseBtn = document.getElementById("decrease");
const resetBtn = document.getElementById("reset");

async function loadCounter() {
  const res = await fetch("/api/counter");
  const data = await res.json();
  updateDisplay(data.counter);
}

//? Update counter display with animation

function updateDisplay(newCount) {
  counterEl.textContent = newCount;

//! Add pulse effect

  counterEl.classList.add("pulse");
  setTimeout(() => {
    counterEl.classList.remove("pulse");
  }, 300);

}

//? Increase

increaseBtn.addEventListener("click", async () => {
  const res = await fetch("/api/increase", { method: "POST" });
  const data = await res.json();
  updateDisplay(data.counter);

});

//? Decrease

decreaseBtn.addEventListener("click", async () => {
  const res = await fetch("/api/decrease", { method: "POST" });
  const data = await res.json();
  updateDisplay(data.counter);
});

//? Reset

resetBtn.addEventListener("click", async () => {
  const res = await fetch("/api/reset", { method: "POST" });
  const data = await res.json();
  updateDisplay(data.counter);
});

loadCounter(); //! initial load
