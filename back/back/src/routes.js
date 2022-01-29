const { Router } = require('express');
const register = require('./controllers/registerUsers');
const login = require('./controllers/loginUser');
const cors = require('cors');
const authMiddlewares = require('./middlewares/authMiddlewares');

const router = Router();

router.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin","*");
    res.header("Access-Control-Allow-Methods", "GET, PUT, POST, DELETE");
    res.header("Access-Control-Allow-Headers", "X-PINGOTHER, Content-Type, Authorization")
    router.use(cors());
    next();
})

router.post('/register', register.store)
router.post('/login',  login.index)
router.use(authMiddlewares)

router.get('users', login.show)

module.exports = router;