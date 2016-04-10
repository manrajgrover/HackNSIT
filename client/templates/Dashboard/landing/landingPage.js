Template.landingPage.helpers({
	'events':function(){

		console.log(Events.find().count());
		return Events.find({},{sort:{timestamp:-1}});
	},
	'moment':function(time){
		return moment(time).fromNow();
	}
});

Template.landingPage.events({
	'click #viewOnMap':function(){
		Router.go('map');
	}
});

Template.landingPage.onRendered(function(){
	var frame= document.createElement('iframe');
	frame.src='https://dev.peery.me';

	$(frame).attr({'seamless':'seamless'});
	$('#broadcastFrame').append(frame);
});