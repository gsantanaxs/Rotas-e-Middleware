const express = require('express');
const router = express.Router();
const produtoController = require('../controllers/produtoController');
const { validarProduto } = require('../middleware/validation');

//GET /api/produtos - Listar todos os produtos
router.get('/', produtoController.listarTodos);

//GET /api/produtos/:id - Buscar produto por ID
router.get('/:id', produtoController.buscarPorId);

//POST /api/produtos - Criar novo produto
router.post('/', validarProduto, produtoController.criar);

//PUT /api/produtos/:id - Atualizar produto
router.put('/:id', validarProduto, produtoController.atualizar);

//DELETE /api/produtos/:id - Deletar produto
router.delete('/:id', produtoController.deletar);

//GET /api/produtos/categoria/:categoria - Filtar categoria
router.get('/categoria/:categoria', produtoController.buscarPorCategoria);

module.exports = router;