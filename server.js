var express = require('express');
var app = express();
var path = require('path');
var api = require('./myModules/enroll')
var ajaxResponse = require("./myModules/ajaxResponse")
var returnClass = require("./myModules/returnClass")

app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname + '/view/index.html'));
});

app.get('/enroll', function (req, res) {
    if (api.enroll(req) == true) {
        res.end("1");
    }
});

app.use(express.static('view'));

app.get('/read/:requestData', function (req, res) {
    console.log("to read : " + req.params.requestData + ".csv")
    ajaxResponse.ajaxResponse(res, req.params.requestData + ".csv")
});

app.get('/class/:subject', function (req, res) {
    returnClass.returnClass(res, req.params.subject + ".csv")
});
app.get('*', function (req, res) {
    res.sendFile(path.join(__dirname + '/view/404.html'));
});

app.listen(8080, function () {
    console.log('server started!')
});