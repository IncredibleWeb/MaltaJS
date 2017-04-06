var fs = require('fs');
var path = require('path');

var pathConfigs = {
    '/': {
        view: 'index',
        metaTitle: 'Home - Packt PWA Demo',
        title: 'Home',
        inlineStyles: getFileContents(['/css/inline.css']),
        remoteStyles: ['https://fonts.googleapis.com/css?family=Roboto:400,300,700,500,400italic', '/css/style.css'],
        remoteScripts: ['/script.js']
    },
    '/settings': {
        view: 'settings',
        metaTitle: 'Settings - Packt PWA Demo',
        title: 'Settings',
        inlineStyles: getFileContents(['/css/inline.css']),
        remoteStyles: ['https://fonts.googleapis.com/css?family=Roboto:400,300,700,500,400italic', '/css/style.css'],
        remoteScripts: ['/script.js']
    },
    '/challenges': {
        view: 'challenges',
        metaTitle: 'Challenges - Packt PWA Demo',
        title: 'Challenges',
        inlineStyles: getFileContents(['/css/inline.css']),
        remoteStyles: ['https://fonts.googleapis.com/css?family=Roboto:400,300,700,500,400italic', '/css/style.css'],
        remoteScripts: ['/script.js']
    }
};

function getFileContents(files) {
    // concat inline styles for document <head>
    var flattenedContents = '';
    var pathPrefix = '/../../src';
    files.forEach(function(file) {
        flattenedContents += fs.readFileSync(path.resolve(__dirname) + pathPrefix + file);
    });

    return flattenedContents;
}

module.exports = {
    getConfig: function(urlPath) {
        var object = pathConfigs[urlPath];

        // check if the path is actually valid.
        if (!object) {
            return null;
        }

        return {
            'data': object
        };
    }
};
