import express from 'express';

const router = express.Router();

router.get('/', (req, res) => {
    res.send('Notes routes get');
});

// obtener notas por id
router.get('/:id', (req, res) => {
    console.log(`nota obteida por id: ${id}`);
});

//crear una nota
router.post('/', (req, res) => {
    res.send('Nota creada');
});
// eliminar nota 
router.delete('/:id', (req, res) => {
    res.send('Nota eliminada');
});

export default router;