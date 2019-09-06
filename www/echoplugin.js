/*window.echo = function(str, callback) {
    cordova.exec(callback, function(err) {
        callback('Nothing to echo.');
    }, "Echo", "echo", [str]);
};*/

var exec = require('cordova/exec');
//var cordova = require('cordova');

function Echoplugin () {
 

}


Echoplugin.prototype.getValue = function (successCallback, errorCallback) {
    //argscheck.checkArgs('fF', 'Device.getInfo', arguments);
    exec(successCallback, errorCallback, 'Echoplugin', 'getValue', []);
};

module.exports = new Echoplugin();