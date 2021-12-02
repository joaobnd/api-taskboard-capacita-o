const express = require('express');
const router = express.Router();

const createUserController = require('../features/user/userController/createUserController');
const loginController = require('../features/login/loginController/loginController');
const logoutController = require('../features/logout/logoutController');

const ensureAuthenticated = require('../middlewares/ensureAthenticated');

router.post('/user', createUserController.handle);
router.post('/signIn', loginController.handle);
router.post('/signOut', ensureAuthenticated, logoutController.handle);


module.exports = router;