const express = require('express');
let router = express.Router();

router.get('/', function (req, res, next) {
    res.send('CORS Page');
});

module.exports = router