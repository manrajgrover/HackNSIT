
Template.navbar.onCreated(function(){
	// Session.set('selectedCity',null);
	// var selectedCity=new ReactiveVar(null);
});
Template.navbar.onRendered(function(){
	$('.ui.sidebar').sidebar('attach events', '#navbar-mobile .toggle-sidebar');
	$('.ui.dropdown').dropdown();
	var router=Router.current().params;
});
Template.navbar.helpers({
	'username':function(){
		var user= Meteor.user();
		if(user){
			if(user.profile&&user.profile.firstName)
				return user.profile.firstName;
			else
				return user.username;
			// return user.profile.firstName||user.username;
		}
	}
});

Template.navbar.events({
	'click .logout':function(event){
		Meteor.logout();
		sAlert.info('You have successfully logged out. Take care');
	}
});