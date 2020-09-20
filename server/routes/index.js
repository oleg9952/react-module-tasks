const express = require('express');
const router = express.Router();
const { getAccounts } = require('../middleware');

// router.route('/accounts/add').post();
// router.route('/accounts/delete/:id').delete();
router.route('/accounts').get(getAccounts);
// router.route('/accounts/:name').get();

module.exports = router;