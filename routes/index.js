const express = require('express');
const router = express.Router();

//Importar outros routers
const usuariosRouter = require('./usuarios');
const produtosRouter = require('./produtos');
const authRouter = require('./auth');

//Rota principal
router.get('/', (req, res) =>{
    res.json({
        message: 'API da Padaria Doce Sabor',
        version: '1.0.0',
        endpoints: {
            usuarios: '/api/usuarios',
            produtos: '/api/produtos',
            auth: '/api/auth'
        }
    });
});

//Usar sub-routers
router.use('/usuarios', usuariosRouter);
router.use('/produtos', produtosRouter);
router.use('/auth', authRouter);

module.exports = router;