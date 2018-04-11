(function(){

    'use strict';

    var express = require('express');

    var app = express();

    var request = require('request');

    var path = require('path');

    var engines = require('consolidate');

    app.engine('html', engines.mustache);

    app.set('view engine', 'html');

    app.use(express.static(__dirname + '/public'));

    app.set('views', path.join(__dirname, '/public'));

    app.use(express.static('views'));

    app.set('port', (process.env.PORT || 8133));



    app.use(function (req, res, next) {
        res.setHeader('Access-Control-Allow-Origin', '*');
        next();
    });

    app.get('/',function(req,res){
        res.render('web.html');
    });



    app.listen(app.get('port'), function() {
        console.log("Node app is running at localhost:" + app.get('port'))
    });

})();
