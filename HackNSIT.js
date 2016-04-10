// if (Meteor.isClient) {
//   // counter starts at 0
//   Session.setDefault('counter', 0);

//   Template.hello.helpers({
//     counter: function () {
//       return Session.get('counter');
//     }
//   });

//   Template.hello.events({
//     'click button': function () {
//       // increment the counter when button is clicked
//       Session.set('counter', Session.get('counter') + 1);
//     }
//   });
// }
if (Meteor.isServer) {
	Meteor.startup(function () {
		console.log("HELLOO");
		var Twitter = Meteor.npmRequire('twit');

		var client1 = new TwitMaker({
			consumer_key: '0AyxYs06mikk2Z0ZAvx0DlxZw',
  			consumer_secret: 'qEIqwHat60rzeU33Gs7O6NIGaXmY8vNFOwX6W5NvZK6lyrhdlR',
  			access_token: '2313261072-MTfmroVnvtSEM5Yvu6NcRvxmJ64CnTTYDlqF0F6',
  			access_token_secret: 'HzwxdUfHsoui9hU8fYjTOSl9bXjpMSHYCHmA4qMtkS26v'
  		});
		// var stream = client1.stream('statuses/filter', {'locations':'-73,40,-74,41' });
		var stream = client1.stream('statuses/filter', {track: 'googler'});
		stream.on('tweet',function (tweet) {
    		console.log(tweet);
    	});
  	});
}

