'use strict';

//var utterance = require('bencoding.utterance');
exports.outputSpeechFromText = function (pText,pTxtToSpeech) {
	
		//var textToSpeech = pUtterance.createSpeech();

		if(pTxtToSpeech.isSpeaking()){
				Ti.API.info("already speaking");
				return false;
		}
		
		pTxtToSpeech.startSpeaking({
			text:pText			
		});
		
		return true;	
};


