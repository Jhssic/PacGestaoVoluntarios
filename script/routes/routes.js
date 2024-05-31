const express = require('express');
const { voluntarios } = require('../controller/controller.js');

const router = express.Router();

router.get('/voluntarios', voluntarios.all);
router.post('/assinante', voluntarios.create)

module.exports = router;