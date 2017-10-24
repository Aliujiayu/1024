var express = require('express');
var router = express.Router();
var fs = require('fs');
var dt=0;
/* GET home page. */
router.get('/', function(req, res, next) {
	dt++;
	fs.readFile('public/a.txt','utf-8',function(err,data){
		if (err) {
			console.log(err);
		} else{
			console.log(data);
			fs.writeFile('public/a.txt','a页面被访问的次数：'+dt,function(err){
				if(err){
					console.log(err);
				}
			})
			res.render('index', {title: data});
		}
	})

});

module.exports = router;