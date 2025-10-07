const votes = {
  JavaScript: 0,
  Python: 0,
  Java: 0,
  "C++": 0
};

function vote(language) {
  votes[language]++;
  updateVotes();
}

function updateVotes() {
  document.getElementById("js-votes").textContent = votes["JavaScript"];
  document.getElementById("py-votes").textContent = votes["Python"];
  document.getElementById("java-votes").textContent = votes["Java"];
  document.getElementById("cpp-votes").textContent = votes["C++"];
}

// Simulate random real-time voting every 2 seconds
setInterval(() => {
  const languages = Object.keys(votes);
  const randomLang = languages[Math.floor(Math.random() * languages.length)];
  votes[randomLang]++;
  updateVotes();
}, 2000);
