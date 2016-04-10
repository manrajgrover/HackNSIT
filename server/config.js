Meteor.startup(function () {
	var future= Meteor.npmRequire('fibers/future');
	if(Meteor.settings.deploy){
		var settings= Meteor.settings;

		ServiceConfiguration.configurations.remove({
		    service: 'facebook'
		});

		ServiceConfiguration.configurations.insert({
		    service: 'facebook',
		    appId: settings.facebook.appId ||'1734700473442235',
		    secret: settings.facebook.secret ||'bdec54e38b5ce82556677a358eba1cb6',
		    requestPermission: ['email','publish_actions']
		});

		Accounts.loginServiceConfiguration.remove({
		  service: "twitter"
		});
		
		Accounts.loginServiceConfiguration.insert({
		  service: "twitter",
		  consumerKey: settings.twitter.consumerKey ||"PwdsVBXRneX7REuJ8mclsoyUd",
		  secret: settings.twitter.secret|| "vrNbytV4fYBB1x9Lg3aTdasYG3K6jDOiVhTnxSeNDoPNZMMwfq",
		  requestPermission: ['email']
		});


		Accounts.loginServiceConfiguration.remove({
		  service: "google"
		});
		Accounts.loginServiceConfiguration.insert({
		  service: "google",
		  clientId: settings.google.clientId ||"560289550843-4ofalbcpciqjtvtag20el7q283qnl3u3.apps.googleusercontent.com",
		  secret: settings.google.secret ||"D-hqAXq-NqseK6iMMZXg3Qze",
		  requestPermission: ['email']
		});
	}else{ //localhost
		ServiceConfiguration.configurations.remove({
		    service: 'facebook'
		});

		ServiceConfiguration.configurations.insert({
		    service: 'facebook',
		    appId: '1734700473442235',
		    secret: 'bdec54e38b5ce82556677a358eba1cb6',
		    requestPermission: ['email','publish_actions']
		});

		Accounts.loginServiceConfiguration.remove({
		  service: "twitter"
		});
		
		Accounts.loginServiceConfiguration.insert({
		  service: "twitter",
		  consumerKey: "PwdsVBXRneX7REuJ8mclsoyUd",
		  secret: "vrNbytV4fYBB1x9Lg3aTdasYG3K6jDOiVhTnxSeNDoPNZMMwfq",
		  requestPermission: ['email']
		});


		Accounts.loginServiceConfiguration.remove({
		  service: "google"
		});
		Accounts.loginServiceConfiguration.insert({
		  service: "google",
		  clientId: "560289550843-4ofalbcpciqjtvtag20el7q283qnl3u3.apps.googleusercontent.com",
		  secret: "D-hqAXq-NqseK6iMMZXg3Qze",
		  requestPermission: ['email']
		});
	}


});
