// this module will response to ajax call for the class list table 
// it will read the file and response the content to the call
const fs = require('fs');

exports.ajaxResponse = function (res,subject) {
// it will read the classList.csv and return its content to the ajaxCall made by the data table ajax
    fs.readFile("./Class/"+subject, function (err, data) {
        console.log("ajax")
        res.writeHead(200, {
            'Content-Type': 'text/plain',
            'Access-Control-Allow-Origin': '*'
        });
        data = "" + data
        res.end("" + data.trimRight());
    });
}