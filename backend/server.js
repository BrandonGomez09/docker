const express = require('express');
const app = express();
const port = 3000;
const usersRoutes = require('./routes/users');
const db = require('./db');

app.use(express.json());
app.use('/users', usersRoutes);

app.listen(port, () => {
  console.log(`Servidor corriendo en http://localhost:${port}`);
});
