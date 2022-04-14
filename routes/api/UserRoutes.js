const express = require('express');
const UserController = require('../../controller/UserController');
const router = express();
const cors = require('cors');


router.use(cors());


router.post('/register', UserController.register);
router.post('/login', UserController.login);
router.get('/userlist', UserController.dataListUser);

module.exports = router;
