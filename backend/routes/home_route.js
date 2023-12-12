const express = require('express');
const router = express.Router();

router.get('/', (req, res)=>{
	res.render('index', {title: 'Welcome to the Christmas Book Club', message: 'Here you can find and review books! 🔖'});
})

module.exports = router;