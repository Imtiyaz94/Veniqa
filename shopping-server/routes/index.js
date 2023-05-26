import express from 'express';
// const express = request
// import passportAuth from '../authentication/passportAuth';
// const router = Router();
const router = express.Router();

/* GET home page. */
// router.get('/', function (req, res, next) {
//   return res.sendStatus('success');
//   // res.render('index', { title: 'Veniqa Shopping Server' });
// });
// console.log(router.get('/'));
router.get('/', (req, res, next) => {
  // console.log(req);
  return res.send('Veniqa index');
  next();
});
module.exports = router;
