const multer = require('multer');
const express = require('express');

const upload = multer();
const router  = express.Router();
const flagsController = require('../controllers/flags');

router.get('/flags', flagsController.getAllFlags);
router.post('/flags', upload.none(), flagsController.newFlag);
router.delete('/flags', flagsController.deleteAllFlags);

router.get('/flags/:name', flagsController.getOneFlag);
router.post('/flags/:name', flagsController.newComment);
router.delete('/flags/:name', flagsController.deleteOneFlag);

module.exports = router;
