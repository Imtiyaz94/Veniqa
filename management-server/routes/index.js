import express from 'express';
import passportAuth from '../authentication/passportAuth';

const router = express.Router();
/* GET home page. */
router.get('/', function (req, res, next) {
  // console.log('index is called');
  return res.send('Veniqa Admin Server');
});

// router.use(passportAuth.isAuthenticated);
// router.use(passportAuth.isSuperAdmin);

module.exports = router;
