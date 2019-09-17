// this module is to check if the url subject is on the sever or not ; ex localhost/class/subject
var fs = require('fs');
var viewClass = require('./viewClass');

exports.returnClass = function (res, string) {
  var url = './view/classList.html';
  fs.readFile("./Class/" + string, function (err, data) {
    if (data == undefined) {
      url = './view/404.html'
    }
      // it will call the view class funtion from viewClass module
      viewClass.viewClassList(res, string,url)
    
  });
}