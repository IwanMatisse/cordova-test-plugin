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
	getValue: function (win, fail, args) {
		console.log("ESTT TTSTST TS T ST T STTTTTTT");
	}
};
require('cordova/exec/proxy').add('Echoplugin', module.exports);