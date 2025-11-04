document.getElementById('registerForm').addEventListener('submit', async function (e) {
  e.preventDefault();

  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;

  try {
    
    const response = await fetch('http://localhost:5000/api/register', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ username, password })
    });

    const result = await response.json();

    if (response.ok) {
      alert('✅ Registration successful! You can now log in.');
      window.location.href = 'login.html';
    } else {
      alert('❌ Registration failed: ' + result.error);
    }
  } catch (error) {
    alert('🚫 Error connecting to server');
    console.error(error);
  }
});
