// <script> 

document.getElementById('loginForm').addEventListener('submit', async function (e) {
  e.preventDefault();
  
  const button = e.target.querySelector('button');
  
  button.classList.add('loading');
  button.disabled = true;
  
  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;
  
  try {
    const res = await fetch('/api/auth/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ username, password }),
    });
    
    const data = await res.json();
    
    if (res.ok) {
      localStorage.setItem('token', data.token);
      window.location.href = 'index.html';
    } else {
      mostrarMensaje('Usuario o contraseña incorrectos', 'error', 5000);
    }
  } catch (error) {
    console.error('Login error:', error);
    mostrarMensaje('Error de inicio de sesión', 'error', 5000);
  } finally {
    button.classList.remove('loading');
    button.disabled = false;
  }
});
// </script>