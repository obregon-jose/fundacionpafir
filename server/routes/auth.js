// server/routes/auth.js
const express = require('express');
const jwt = require('jsonwebtoken');
const User = require('../models/User');
const router = express.Router();

// Registro de usuario
router.post('/register', async (req, res) => {
  try {
    const { username, password } = req.body;

    // Verificar si el usuario ya existe
    const existingUser = await User.findOne({ username });
    if (existingUser) return res.status(400).json({ message: 'El usuario ya existe' });

    // Crear nuevo usuario
    const user = new User({ username, password });
    await user.save();

    res.status(201).json({ message: 'Usuario registrado exitosamente' });
  } catch (err) {
    res.status(500).json({ message: 'Error en el registro', error: err.message });
  }
});

// Login de usuario
router.post('/login', async (req, res) => {
  const { username, password } = req.body;

  try {
    // Buscar usuario
    const user = await User.findOne({ username });
    if (!user) return res.status(400).json({ message: 'Usuario o contraseña incorrectos' });

    // Verificar la contraseña
    const isMatch = await user.comparePassword(password);
    if (!isMatch) return res.status(400).json({ message: 'Usuario o contraseña incorrectos' });

    // Crear JWT
    const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, { expiresIn: '2h' });

    res.json({ message: 'Login exitoso', token });
  } catch (err) {
    res.status(500).json({ message: 'Error en el login', error: err.message });
  }
});

module.exports = router;
