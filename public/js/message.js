// Función para mostrar mensajes
function mostrarMensaje(texto, tipo) {
    const mensaje = document.getElementById('mensaje');
    mensaje.textContent = texto;
    mensaje.className = tipo;
    mensaje.classList.remove('hidden');
    setTimeout(() => mensaje.classList.add('hidden'), 3000);
}