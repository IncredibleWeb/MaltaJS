var fs = require('fs');
var path = require('path');

var pathConfigs = {
    '/': {
        view: 'index',
        metaTitle: 'Sky High Arrivals - PWA Demo',
        title: 'Sky High Arrivals',
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
