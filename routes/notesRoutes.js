import express from 'express';

const router = express.Router();

router.get('/', (req, res) => {
    res.send('Notes routes get');
});

export default router;