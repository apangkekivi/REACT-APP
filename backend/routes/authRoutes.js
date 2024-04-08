const express = require('express');
const router = express.Router();
const cors = require('cors')
const { test, resgisterUser, loginUser } = require('../controllers/authController')

router.use(
    cors({
        credentials: true,
        origin: 'http://localhost:5173'
    })
)

router.get('/', test)
router.post('/register', resgisterUser)
router.post('/login', loginUser)


module.exports = router