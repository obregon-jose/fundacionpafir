// // server/server.js

const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');
const userRoutes = require('./routes/user');
const authRoutes = require('./routes/auth');
const path = require('path');
const fs = require('fs');

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(express.json());

// Servir archivos estáticos desde la carpeta 'public'
app.use(express.static(path.join(__dirname, '../public')));

// Rutas de la API
app.use('/api/users', userRoutes);
app.use('/api/auth', authRoutes);



// Conexión a la base de datos de MongoDB
// mongoose.connect(process.env.MONGODB_URI)
//   .then(() => {
//     console.log('Conexión a MongoDB exitosa');
//   })
//   .catch((err) => {
//     console.error('Error al conectar a MongoDB', err);
//   });

// Iniciar servidor
app.listen(PORT, () => {
  console.log(`Servidor corriendo en el puerto ${PORT}`);
});

// Ruta para obtener el contenido del archivo JSON
app.get('/api/data', (req, res) => {
  const dataPath = path.join(__dirname, '../data/data.json');
  fs.readFile(dataPath, 'utf8', (err, data) => {
    if (err) {
      console.error('Error al leer el archivo JSON:', err);
      return res.status(500).json({ error: 'Error al leer el archivo JSON' });
    }
    res.json(JSON.parse(data));
  });
});

// Ruta para actualizar o agregar contenido al archivo JSON
app.post('/api/data', (req, res) => {
  const dataPath = path.join(__dirname, '../data/data.json');
  const nuevoContenido = req.body;

  fs.readFile(dataPath, 'utf8', (err, data) => {
    if (err) {
      console.error('Error al leer el archivo JSON:', err);
      return res.status(500).json({ error: 'Error al leer el archivo JSON' });
    }

    let jsonData;
    try {
      jsonData = JSON.parse(data);
    } catch (parseError) {
      console.error('Error al parsear el archivo JSON:', parseError);
      return res.status(500).json({ error: 'Error al parsear el archivo JSON' });
    }

    // Combinar el contenido existente con el nuevo
    jsonData = { ...jsonData, ...nuevoContenido };

    fs.writeFile(dataPath, JSON.stringify(jsonData, null, 2), 'utf8', (writeErr) => {
      if (writeErr) {
        console.error('Error al escribir en el archivo JSON:', writeErr);
        return res.status(500).json({ error: 'Error al escribir en el archivo JSON' });
      }
      res.json({ message: 'Contenido actualizado o agregado correctamente', data: jsonData });
    });
  });
});

// Ruta principal para devolver el archivo index.html
app.get('*', (req, res) => {
    if (!req.originalUrl.startsWith('/api')) {
        res.sendFile(path.resolve(__dirname, '../public', 'index.html'));
    }
});