async function loadLogs() {
  try {
    const res = await fetch("/api/logs");
    const data = await res.json();
    const container = document.getElementById("logs");

    if (data.error) {
      container.innerHTML = `<p style="color:red">${data.error}</p>`;
      return;
    }

    container.innerHTML = "";

    data.logs.forEach(line => {
      const p = document.createElement("p");
      p.classList.add("log-line");

      if (line.includes("ERROR")) p.classList.add("error");
      else if (line.includes("WARNING")) p.classList.add("warning");
      else p.classList.add("info");

      p.textContent = line;
      container.appendChild(p);
    });

  } catch {
    document.getElementById("logs").innerHTML =
      "<p style='color:red'>Failed to load logs.</p>";
  }
}
