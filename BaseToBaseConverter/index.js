var Alexa = require('alexa-sdk');

var handles = {
	'LaunchRequest': function(){
		this.emit(':ask', "Is this your first time using base to base converter?","Is this your first time using this skill? respond yes or no");
	},
	'AMAZON.YesIntent': function() {
        this.attributes['speechOutput'] = this.t("WELCOME_MESSAGE", this.t("SKILL_NAME"));
		this.attributes['repromptSpeech'] = this.t("WELCOME_REPROMPT");
		this.emit(':ask', this.attributes['speechOutput'], this.attributes['repromptSpeech']);
    },

    'AMAZON.NoIntent': function() {
        this.emit(':tell', 'Ok, start converting numbers','Are you still there, its time to convert numbers!');
    },
	'AMAZON.HelpIntent': function () {},
	'AMAZON.RepeatIntent': function () {},
	'AMAZON.StopIntent': function () {},
	'AMAZON.CancelIntent': function () {},
	'SessionEndedRequest':function () {},
	'Unhandled': function () {},
	'ConversionIntent' : function(){
		this.emit(':tell', 'Hello World!');
	}
}

var responseStrings = {
	"en": {
		"translation":{
			"SKILL_NAME": "Base To Base Converter",
            "WELCOME_MESSAGE": "Welcome to the base to base converter, To begin converting a number from base 10 to a different base say something like, convert 400 to base 3 or convert 80 to hex or stop to end the session",
            "WELCOME_REPROMPT": "For instructions on what you can say, please say help me.",
            "HELP_MESSAGE": "This skill converts numbers in base 10 to a different base. the base must be larger than 0 and smaller than 32. You can say convert 400 to base 3, or convert 400 to binary, or you can say stop",
            "HELP_REPROMPT": "You can say things like, convert 50 to base 20, or you can say exit",
            "STOP_MESSAGE": "Thanks for using base to base converter! Have an incredible day"
		}
	},
	"en-us":{
		"translation":{
			"SKILL_NAME": "Base To Base Converter"
		}
	},
	"en-GB":{
		"translation":{
			"SKILL_NAME": "Base To Base Converter"
		}
	},
	"de":{
		"translation":{
			"SKILL_NAME": "Base To Base Converter",
            "WELCOME_MESSAGE": "Willkommen auf der Basis zu Basis-Konverter, Um zu beginnen Umwandlung einer Zahl von Basis 10 auf eine andere Basis sagen, so etwas wie konvertieren 400 auf Basis 3 oder konvertieren 80 zu hex oder stoppen, um die Sitzung zu beenden",
            "WELCOME_REPROMPT": "Für Anweisungen auf, was Sie sagen können, bitte sagen Sie mir bitte",
            "HELP_MESSAGE": "Diese Fähigkeit konvertiert Zahlen in der Basis 10 zu einer anderen Basis. Die Basis muss größer als 0 und kleiner als 32 sein. Sie können sagen, konvertieren 400 auf Basis 3, oder konvertieren 400 in binäre, oder Sie können sagen, stoppen",
            "HELP_REPROMPT": "Sie können Dinge sagen, konvertieren 50 auf Basis 20, oder Sie können sagen, Ausfahrt",
            "STOP_MESSAGE": "Danke für die Verwendung von Base to Base Converter! Haben Sie einen unglaublichen Tag"
		}
	}
}

exports.handler = function(event, context, callback){
	var alexa = Alexa.handler(event,context,callback);
	alexa.resources = responseStrings;
	alexa.registerHandlers(handlers);
	alexa.execute();
};