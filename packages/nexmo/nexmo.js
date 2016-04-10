EasyNexmo= {

	methodList: [
		'sendTextMessage',
		'sendBinaryMessage',
		'sendWapPushMessage',
		'checkBalance',
		'getPricing',
		'getNumbers',
		'searchNumbers',
		'buyNumber',
		'cancelNumber',
		'updateNumber',
		'changePassword',
		'changeMoCallbackUrl',
		'changeDrCallbackUrl',
		'verifyNumber',
		'checkVerifyRequest',
		'searchVerifyRequest',
		'controlVerifyRequest',
		'numberInsight'

	],

	config: function(options){
		var easynexmo= Meteor.npmRequire('easynexmo');
		easynexmo.initialize(
				options.key,
				options.secret,
				options.protocol,
				options.debug
			);

		return Async.wrap(easynexmo,EasyNexmo.methodList);
	}
};