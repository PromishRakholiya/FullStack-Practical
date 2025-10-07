const apiUrl = "http://localhost:5000/api/users";

document.getElementById("username").textContent = localStorage.getItem("name");
document.getElementById("loginTime").textContent = localStorage.getItem("loginTime");

async function logout() {
  await fetch(`${apiUrl}/logout`, {
    method: "POST",
    credentials: "include",
  });
  localStorage.clear();
  window.location.href = "/login.html";
}
