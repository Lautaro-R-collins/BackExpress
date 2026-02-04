import express from 'express';
import router from './routes/notesRoutes.js';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use('/notes', router);

app.get('/', (req, res) => {
    res.status(201).json({ message: 'Servidor funcionando correctamente' });
});

app.listen(PORT, () => {
  console.log(`servidor corriendo en puerto ${PORT}`);
});