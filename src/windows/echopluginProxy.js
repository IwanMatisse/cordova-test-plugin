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
module.export = { 
	getValue: function (win, fail, args) {
		console.log("ESTT TTSTST TS T ST T STTTTTTT");
		win(777);
	};
	
	testU: function (win, fail, args) {
		console.log("ESTT TTSTST TS T ST T STTTTTTT2222");
	};
};
require('cordova/exec/proxy').add('Echoplugin', module.exports);