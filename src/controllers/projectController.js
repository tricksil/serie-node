const express = require('express');

const authMiddeware = require('../middlewares/auth');

const router = express.Router();

router.use(authMiddeware);

router.get('/', (req, res) => {
  res.send({ ok: true, user: req.userId });
});

module.exports = (app) => app.use('/projects', router);
