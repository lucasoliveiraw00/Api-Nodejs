const express = require('express');
const router = express.Router();
const {
    authenticationMiddleware
} = require('../utils/token')

const controller = require('../controllers/usuarios');

/*******
 * TODO: Definição das rotas do CRUD de Usuários e Login.
 * Exemplo:
 * 
 *******/

//login
router.post('/login',
    controller.login,
)

// POST /usuarios
router.post('/',
    authenticationMiddleware,
    controller.cadastro,
);

// PUT /usuarios/4
router.put('/:usuarioId',
    authenticationMiddleware,
    controller.edicao,
);

// GET /usuarios/4
router.get('/:usuarioId',
    authenticationMiddleware,
    controller.buscaPorId,
);


module.exports = router;