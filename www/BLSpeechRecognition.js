var exec = require("cordova/exec");

function BLSpeechRecognition() {};

BLSpeechRecognition.prototype.testPlugin = function (success,fail,option) {
     exec(success, fail, 'testPlugin', 'testWithTitle', option);
};

var speechRecogniton = new BLSpeechRecognition();
module.exports = speechRecogniton;