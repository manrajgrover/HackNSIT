Meteor.startup(function () {

	if(Meteor.settings.deploy){
		var settings= Meteor.settings;

		ServiceConfiguration.configurations.remove({
		    service: 'facebook'
		});

		ServiceConfiguration.configurations.insert({
		    service: 'facebook',
		    appId: settings.facebook.appId ||'1605417939713165',
		    secret: settings.facebook.secret ||'9297237f1bbe036dbac24231cecef065',
		    requestPermission: ['email']
		});

		Accounts.loginServiceConfiguration.remove({
		  service: "twitter"
		});
		
		Accounts.loginServiceConfiguration.insert({
		  service: "twitter",
		  consumerKey: settings.twitter.consumerKey || "PwdsVBXRneX7REuJ8mclsoyUd",
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
		    appId: '1605417939713165',
		    secret: '9297237f1bbe036dbac24231cecef065',
		    requestPermission: ['email']
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
