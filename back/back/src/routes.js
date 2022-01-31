const { Router } = require("express");
const register = require('./controllers/registerUsers');
const login = require('./controllers/loginUser');
const tagCreate = require("./controllers/tagCreate");
const taskCreate = require("./controllers/taskCreate");
const cors = require('cors');
const authMiddlewares = require('./middlewares/authMiddlewares');

const router = Router();
router.use(cors());

router.post('/register', register.store)
router.post('/login', login.index)
router.use(authMiddlewares)
router.get('/users', login.show)
router.post('/createTag', tagCreate.index)
router.post('/createTask', taskCreate.index)



router.get("users", login.show);

router.post("/task", task.store);
router.post("/tag", tag.store);
router.post("/settings", setting.storage);
module.exports = router;
