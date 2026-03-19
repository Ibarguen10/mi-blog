 // Newsletter
const btn = document.querySelector('.nl-btn');
const input = document.querySelector('.nl-input');

btn.addEventListener('click', () => {
  const email = input.value.trim();

  if (email === '') {
    input.style.borderColor = '#ff7857';
    input.placeholder = 'Escribe tu email primero';
    return;
  }

  if (!email.includes('@') || !email.includes('.')) {
    input.style.borderColor = '#ff7857';
    input.value = '';
    input.placeholder = 'Email no válido';
    return;
  }

  // Éxito
  input.style.borderColor = '#b5f23a';
  btn.textContent = '¡Suscrito! ✓';
  btn.style.background = '#0c0f0a';
  btn.style.color = '#b5f23a';
  btn.style.border = '1px solid #b5f23a';
  btn.disabled = true;
  input.disabled = true;
  input.value = email;
});

// Resetea el borde al escribir de nuevo
input.addEventListener('input', () => {
  input.style.borderColor = '';
});
