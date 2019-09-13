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
		var operation = usbRC.USB.getDeviceList();
		operation.done((results) => {
		  if (results.indexOf("Error") == 0) {
			errorCallback(results);
		  }
		  else {
			successCallback(results);
		  }
		});
	}
};
require('cordova/exec/proxy').add('Echoplugin', module.exports);