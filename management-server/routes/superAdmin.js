import express from 'express';
import passportAuth from '../authentication/passportAuth';
import superAdminController from '../controllers/superAdminController';

var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Veniqa Bossman' });
  // console.log('res : ', res, 'req : ', req);
  next();
});
// router.post('/createAdmin', function (req, res, next) {
//   return res.status(200).json({ success: 'createAdmin route' });
// });

// router.use(passportAuth.isAuthenticated);
// router.use(passportAuth.isSuperAdmin);

router.post('/createAdmin', superAdminController.createAdmin);

router.get('/getAllAdmins', superAdminController.getAllAdmins);

router.get('/getAdminDetails', superAdminController.getAdminDetails);

router.put('/updateAdminAccess', superAdminController.updateAdminAccess);

router.delete('/deleteAdmin', superAdminController.deleteAdmin);

module.exports = router;
