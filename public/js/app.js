// let contenidoDB = null;

// // Función para cargar el contenido desde el JSON
// async function cargarContenido() {
//     try {
//         const response = await fetch('./data/data.json');
//         const data = await response.json();
//         contenidoDB = data.contenido;
        
//         // Actualizar el DOM con el contenido
//         actualizarContenidoDOM();
        
//         // mostrarMensaje('Contenido cargado correctamente', 'success');
//     } catch (error) {
//         mostrarMensaje('Error al cargar el contenido', 'error');
//         // console.error('Error:', error);
//     }
// }

// // Función para actualizar el contenido en el DOM
// function actualizarContenidoDOM() {
//     document.getElementById('titulo').textContent = contenidoDB.titulo;
//     document.getElementById('parrafo').textContent = contenidoDB.parrafo;

// }

// // Cargar contenido inicial
// cargarContenido();

let contenidoDB = null;

// Función para cargar el contenido desde el backend
async function cargarContenido() {
  try {
    const response = await fetch('/api/data'); // Ruta del backend
    const data = await response.json();
    contenidoDB = data.contenido;

    // Actualizar el DOM con el contenido
    actualizarContenidoDOM();
  } catch (error) {
    mostrarMensaje('Error al cargar el contenido', 'error');
    console.error('Error:', error);
  }
}

// Función para actualizar el contenido en el DOM
function actualizarContenidoDOM() {
  document.getElementById('titulo').textContent = contenidoDB.titulo;
  document.getElementById('parrafo').textContent = contenidoDB.parrafo;
}

// Función para guardar cambios en el backend
async function saveEdit(element, saveButton, editButton) {
  const nuevoContenido = {
    contenido: {
      titulo: document.getElementById('titulo').textContent,
      parrafo: document.getElementById('parrafo').textContent,
    }
  };

  try {
    const response = await fetch('/api/data', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(nuevoContenido),
    });

    if (!response.ok) {
      throw new Error('Error en la respuesta del servidor');
    }

    contenidoDB = nuevoContenido.contenido;

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

// Cargar contenido inicial
cargarContenido();

// Función para guardar o agregar contenido en el backend
async function saveEdit(element, saveButton, editButton) {
    const nuevoContenido = {
      contenido: {
        titulo: document.getElementById('titulo').textContent,
        parrafo: document.getElementById('parrafo').textContent,
      }
    };
  
    try {
      const response = await fetch('/api/data', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(nuevoContenido),
      });
  
      if (!response.ok) {
        throw new Error('Error en la respuesta del servidor');
      }
  
      const data = await response.json();
      contenidoDB = data.data.contenido;
  
      // Deshabilitar edición
      element.contentEditable = "false";
      element.classList.remove("editing");
      saveButton.classList.add("hidden");
      editButton.classList.remove("hidden");
  
      mostrarMensaje('Contenido guardado o agregado con éxito!', 'success');
    } catch (error) {
      mostrarMensaje('Error al guardar los cambios', 'error');
      console.error('Error:', error);
    }
  }
  
  // Función para agregar un nuevo elemento al contenido
  async function agregarElemento(nuevoTitulo, nuevoParrafo) {
    const nuevoElemento = {
      contenido: {
        nuevoTitulo,
        nuevoParrafo,
      }
    };
  
    try {
      const response = await fetch('/api/data', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(nuevoElemento),
      });
  
      if (!response.ok) {
        throw new Error('Error en la respuesta del servidor');
      }
  
      const data = await response.json();
      contenidoDB = data.data.contenido;
  
      actualizarContenidoDOM();
      mostrarMensaje('Nuevo elemento agregado con éxito!', 'success');
    } catch (error) {
      mostrarMensaje('Error al agregar un nuevo elemento', 'error');
      console.error('Error:', error);
    }
  }
  