document.getElementById("loginForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const username = document.getElementById("username").value.trim();
  const password = document.getElementById("password").value.trim();

  if (username === "admin" && password === "1234") {
    alert("✅ Admin login successful!");
    window.location.href = "admin.html";
  } else if (username === "user" && password === "user123") {
    alert("✅ User login successful!");
    window.location.href = "index.html";
  } else {
    alert("❌ Invalid username or password!");
  }
});
