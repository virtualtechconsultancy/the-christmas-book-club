const express = require('express');
const router = express.Router();
const { authorizeAdmin } = require('../auth'); 


router.use(authorizeAdmin);


router.get('/dashboard', (req, res) => {
    // Logic for the admin dashboard
    res.send('Admin Dashboard - Access Granted');
});


module.exports = router;