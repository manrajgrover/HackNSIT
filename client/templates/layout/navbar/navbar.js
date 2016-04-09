
Template.navbar.onCreated(function(){
	// Session.set('selectedCity',null);
	// var selectedCity=new ReactiveVar(null);
});
Template.navbar.onRendered(function(){
	$('.ui.sidebar').sidebar('attach events', '#navbar-mobile .toggle-sidebar');
	$('.ui.dropdown').dropdown();
	var router=Router.current().params;
	$('#citySelectNavbar').dropdown('set selected',Session.get('selectedCity'));
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
	},
	launchedLocations:function(){
		return Pitmobil.launchedLocations;
	},
});

Template.navbar.events({
	'click .logout':function(event){
		Meteor.logout();
		sAlert.info('You have successfully logged out. Bye. We miss you already. :\'(');
	},
	'change #citySelectNavbar':function(){
		var cityVal=$('#citySelectNavbar').val();
		if($.inArray(cityVal,Pitmobil.launchedLocations)!==-1){
			// localStorage.setItem('selectedCity',cityVal);
			// Session.set('selectedCity',cityVal);
			Session.set('selectedCity',cityVal);
			if(Router.current().route.getName()==='variantPage')
				Router.go('variantPage',{city:cityVal,variant:Router.current().params.variant,id:Router.current().params.id});
			else
				Router.go('carSelect',{'city':cityVal},{query:{brand:Router.current().params.query.brand,model:Router.current().params.query.model}});
			
		}
	}
	// 'click #signIn':function(event,template){
	// 	$('#signInModal').modal('show');
		
	// }
});