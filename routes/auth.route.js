const router = require('express').Router();
const authControllers = require('../controllers/auth.controllers');

router.post('/user/signup/', authControllers.registerUser);

module.exports = router;
