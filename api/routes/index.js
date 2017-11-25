const express = require('express'),
  router = express.Router(),
  mainCtrl = require('../controllers/MainController');


router.get('/report/:groupId/:reportId', mainCtrl.embedReport);

module.exports = router;