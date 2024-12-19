// // script.js

// Inicializar lógica de usuario Autenticado
document.addEventListener('DOMContentLoaded', () => {
  if (localStorage.getItem('token')) {
    // comparar token con el del servidor
    renderMainPage();
    // El usuario está autenticado, mostrar contenido protegido
  } else {
    setupLoginForm();
    // El usuario no está autenticado, redirigir al login
  }
});

// Función para renderizar la página principal
function renderMainPage() {
  const editables = document.querySelectorAll("[data-editable]");
  //if (isLoggedIn ) { //&& token === tokenServer
    showEditButtons(editables);
    document.getElementById("logoutButton").classList.remove("hidden");
    document.getElementById("loginButton").classList.add("hidden");
  // } else {
  //   document.getElementById("logoutButton").classList.add("hidden");
  //   document.getElementById("loginButton").classList.remove("hidden");
  // }
}

// Crear botones automáticamente debajo de cada texto editable
function showEditButtons(editables) {
  editables.forEach((element, index) => {
    const wrapper = document.createElement("div");
    wrapper.classList.add("editable-section");

    // Clonar el elemento editable y envolverlo en un contenedor
    const originalContent = element.cloneNode(true);
    wrapper.appendChild(originalContent);

    // Botón de "Editar"
    const editButton = document.createElement("button");
    editButton.textContent = "Editar";
    editButton.addEventListener("click", () => enableEdit(originalContent, saveButton, editButton));
    wrapper.appendChild(editButton);

    // Botón de "Guardar" (oculto inicialmente)
    const saveButton = document.createElement("button");
    saveButton.textContent = "Guardar";
    saveButton.classList.add("hidden");
    saveButton.addEventListener("click", () => saveEdit(originalContent, saveButton, editButton));
    wrapper.appendChild(saveButton);

    // Reemplazar el elemento en el DOM
    element.replaceWith(wrapper);
  });
}

// // Función para habilitar edición de un elemento
// function enableEdit(element, saveButton, editButton) {
//   element.contentEditable = "true";
//   // element.focus();
//   element.classList.add("editing");
//   editButton.classList.add("hidden");
//   saveButton.classList.remove("hidden");
// }

// // Función para guardar cambios en un elemento
// async function saveEdit(element, saveButton, editButton) {
//   const nuevoContenido = {
//       contenido: {
//           titulo: document.getElementById('titulo').textContent,
//           parrafo: document.getElementById('parrafo').textContent
//       }
//   };

//   try {
//       // Simulamos la actualización del JSON
//       contenidoDB = nuevoContenido.contenido;
      
//       // Deshabilitar edición

//       element.contentEditable = "false";
//       element.classList.remove("editing");
//       saveButton.classList.add("hidden");
//       editButton.classList.remove("hidden");
//       mostrarMensaje('Cambios guardados con éxito!', 'success');
//       //  En un caso real, aquí verificarías la respuesta del servidor
//       console.log('Contenido guardado:', nuevoContenido);
//   } catch (error) {
//       mostrarMensaje('Error al guardar los cambios', 'error');
//       console.error('Error:', error);
//   }
// }


// Cerrar sesión
function logout() {
  localStorage.clear();
  window.location.href = "index.html";
}

let contenidoDB = null;

// Cargar el contenido desde el backend
async function cargarContenido() {
  try {
    const response = await fetch('/api/data');
    const data = await response.json();
    contenidoDB = data.contenido;
    actualizarContenidoDOM();
  } catch (error) {
    mostrarMensaje('Error al cargar el contenido', 'error');
    console.error('Error:', error);
  }
}

// Actualizar el contenido en el DOM
function actualizarContenidoDOM() {
  document.getElementById('titulo').textContent = contenidoDB.titulo || '';
  document.getElementById('parrafo').textContent = contenidoDB.parrafo || '';
}

// Habilitar la edición de un elemento
function enableEdit(element, saveButton, editButton) {
  element.contentEditable = "true";
  element.classList.add("editing");
  editButton.classList.add("hidden");
  saveButton.classList.remove("hidden");
}

// Guardar cambios en el backend
async function saveEdit(element, saveButton, editButton) {
  const nuevoContenido = {
    contenido: {
      titulo: document.getElementById('titulo').textContent,
      parrafo: document.getElementById('parrafo').textContent
    }
  };

  try {
    const response = await fetch('/api/data', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(nuevoContenido),
    });

    if (!response.ok) {
      throw new Error('Error al guardar los cambios');
    }

    const data = await response.json();
    contenidoDB = data.data.contenido;

    // Deshabilitar edición
    element.contentEditable = "false";
    element.classList.remove("editing");
    saveButton.classList.add("hidden");
    editButton.classList.remove("hidden");

    mostrarMensaje('Cambios guardados con éxito!', 'success');
  } catch (error) {
    mostrarMensaje('Error al guardar los cambios', 'error');
    console.error('Error:', error);
  }
}

// Mostrar mensajes al usuario
function mostrarMensaje(mensaje, tipo) {
  const mensajeDiv = document.getElementById('mensaje');
  mensajeDiv.textContent = mensaje;
  mensajeDiv.className = tipo;
  setTimeout(() => {
    mensajeDiv.textContent = '';
    mensajeDiv.className = '';
  }, 3000);
}

// Cargar contenido inicial al cargar la página
document.addEventListener('DOMContentLoaded', cargarContenido);
