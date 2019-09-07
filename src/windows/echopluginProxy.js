/*cordova.commandProxy.add("Echo",{
    echo:function(successCallback,errorCallback,strInput) {
        if(!strInput || !strInput.length) {
            errorCallback("Error, something was wrong with the input string. =>" + strInput);
        }
        else {
            successCallback(strInput + "echo");
        }
    }
});*/
module.exports = { 
	getValue: function (successCallback, errorCallback, args) {
		console.log("ESTT TTSTST TS T ST T STTTTTTT");
		var res = usbRC.USB.getDeviceList().getResults();
		if(res.indexOf("Error") == 0) {
            errorCallback(res);
        }
        else {
            successCallback(res);
        }
	}
};
require('cordova/exec/proxy').add('Echoplugin', module.exports);