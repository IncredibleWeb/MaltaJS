'use strict';

const path = require('path');
const express = require('express');
const exphbs = require('express-handlebars');
const pathConfigs = require('./server/models/path-config.js');

var folder = process.argv[2] || '/src';

var app = express();

// setup express to use handlebars as the templating engine
var hbs = exphbs.create({
    defaultLayout: 'main',
    layoutsDir: path.join(__dirname, '/server/views/layouts'),
    partialsDir: path.join(__dirname, '/server/views/partials')
});
app.set('views', path.join(__dirname, '/server/views'));
app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

// use live reload if debug environment
if (folder === '/src') {
    app.use(require('connect-livereload')());
}

// setup server for static assets
app.use('/', express.static(path.join(__dirname, folder)));

// setup static server for mock api
app.use('/api', express.static(path.join(__dirname, '/api')));

// setup server urls
app.get('/', function(req, res) {
    var urlSections = req.path.split('/');
    urlSections = urlSections.filter(function(sectionString) {
        return sectionString.length > 0;
    });

    var urlPath = null;
    if (urlSections.length === 0) {
        urlPath = '/';
    } else {
        urlPath = '/' + urlSections[1];
    }

    var pathConfig = pathConfigs.getConfig(urlPath);
    if (!pathConfig) {
        res.status(404).send();
        return;
    }

    res.render(pathConfig.data.view, pathConfig);
});

app.listen(3000, () => {
    console.log(`Running MaltaJS PWA Demo (${folder}) on localhost:3000`);
});

module.exports = app;
