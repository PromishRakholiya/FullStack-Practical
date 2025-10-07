const apiUrl = "http://localhost:5000/api/users";

async function login() {
  const name = document.getElementById("name").value;
  const password = document.getElementById("password").value;

  const res = await fetch(`${apiUrl}/login`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    credentials: "include",
    body: JSON.stringify({ name, password }),
  });

  const data = await res.json();
  if (res.ok) {
    localStorage.setItem("name", data.name);
    localStorage.setItem("loginTime", data.loginTime);
    window.location.href = "/profile.html";
  } else {
    alert(data.message);
  }
}

async function register() {
  const name = prompt("Enter username:");
  const password = prompt("Enter password:");
  const res = await fetch(`${apiUrl}/register`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ name, password }),
  });
  const data = await res.json();
  alert(data.message);
}
