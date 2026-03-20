// ================================
// UTILS — Funciones reutilizables
// utils.js — devlog de Cristian Palomeque
// ================================


// 1. FORMATEAR FECHAS
// Convierte "2026-03-15" a "15 de marzo de 2026"
function formatDate(dateStr) {
  return new Date(dateStr).toLocaleDateString('es-CO', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });
}


// 2. TRUNCAR TEXTO
// Corta un texto largo y agrega "..." al final
function truncate(text, maxLength = 100) {
  if (text.length <= maxLength) return text;
  return text.slice(0, maxLength).trimEnd() + '...';
}


// 3. DEBOUNCE
// Evita que una función se ejecute demasiado seguido
function debounce(fn, delay = 300) {
  let timer;
  return function (...args) {
    clearTimeout(timer);
    timer = setTimeout(() => fn(...args), delay);
  };
}


// 4. STORAGE — localStorage simplificado
const storage = {
  set(key, value) {
    localStorage.setItem(key, JSON.stringify(value));
  },
  get(key) {
    const item = localStorage.getItem(key);
    return item ? JSON.parse(item) : null;
  },
  remove(key) {
    localStorage.removeItem(key);
  }
};


// 5. COPIAR AL PORTAPAPELES
// Copia texto y ejecuta un callback opcional
async function copyToClipboard(text, onSuccess) {
  try {
    await navigator.clipboard.writeText(text);
    if (onSuccess) onSuccess();
  } catch (err) {
    console.error('Error al copiar:', err);
  }
}


// 6. SCROLL SUAVE A UN ELEMENTO
// Lleva la vista hasta cualquier elemento por su id
function scrollTo(id) {
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: 'smooth' });
}


// 7. DETECTAR MODO OSCURO
// Devuelve true si el usuario tiene modo oscuro activado
function isDarkMode() {
  return window.matchMedia('(prefers-color-scheme: dark)').matches;
}


// 8. CALCULAR TIEMPO DE LECTURA
// Estima cuántos minutos toma leer un texto
function readingTime(text) {
  const words = text.trim().split(/\s+/).length;
  const minutes = Math.ceil(words / 200);
  return `${minutes} min lectura`;
} 
