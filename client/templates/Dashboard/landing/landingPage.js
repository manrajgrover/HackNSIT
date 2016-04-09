Template.landingPage.helpers({
	'events':function(){

		console.log(Events.find().count());
		return Events.find().fetch();
	},
	'moment':function(time){
		return moment(time).fromNow();
	}
});

// Template.landingPage.onRendered(function(){
// 	var self=this;
// 	//Session.set('selectedCity',localStorage.getItem('selectedCity'));
// 	//$('#citySelect').dropdown('set selected',Session.get('selectedCity'));
// 	this.autorun(function(){
// 		//$('#citySelect').dropdown('refresh');
// 		//$('#citySelect').dropdown('set selected',Session.get('selectedCity'));
// 		var view=self.selectedView.get();
// 		// var router=Router.current().params.query;
// 		var router=Router.current().params;
// 		if(Pitmobil.launchedLocations.indexOf(router.city)===-1){
// 			Router.go('landing',{},{replaceState:true});
// 			self.selectedView.set('citySelectTemp');
// 			Session.set('selectedCity',null);
// 			self.selectedCity.set(null);
// 			if(self.selectedCity==='New Delhi' || self.selectedCity==='Noida'){

// 			}
// 		}
// 		else{
// 			Session.set('selectedCity',router.city);
// 			self.selectedCity.set(router.city);
// 			if($.inArray(router.query.brand,Pitmobil.brands)===-1){
// 				//console.log('wt*!');
// 				Router.go('carSelect',{city:router.city},{replaceState:true});
// 				// Router.go('/'+router.city);
// 				self.selectedView.set('carBrandSelect');
// 			}
// 			else{
// 				Router.go('carSelect',{city:router.city},{query:{'brand':router.query.brand,'model':router.query.model},replaceState:true}); //replaceState
// 				self.selectedView.set('carModelSelect');
// 			}
// 		}
// 	});
// });


// Template.citySelectTemp.onRendered(function(){
// 	$('.ui.dropdown').dropdown();
// 	$('.testDriveSlide').click(function(){
// 		$('html, body').animate({
//         	scrollTop: $("#testDriveDiv").offset().top
//     	}, 400);
// 	});
// });

// Template.landingPage.onCreated(function(){
// 	// this.selectedCity=new ReactiveVar(null);
// 	this.selectedView=new ReactiveVar('citySelectTemp');
// 	this.selectedCity=new ReactiveVar(null);
// });

// Template.landingPage.helpers({
// 	selectedView:function(){
// 		return Template.instance().selectedView.get();
// 	}
// });

// Template.citySelectTemp.helpers({
// 	'cityNotSelected':function(){
// 		var temp=Template.instance();
// 		// return Session.get('selectedCity')===''||Session.get('selectedCity')===null;
// 		// return temp.selectedCity.get()===''||temp.selectedCity.get()===null;
// 		return temp.get('selectedCity').curValue===''||temp.get('selectedCity').curValue===null;
// 	},
// 	'launchedLocations':function(){
// 		return Pitmobil.launchedLocations;
// 	}
// 	// selectedView: function(){
// 	// 	return Template.instance().selectedView.get();
// 	// },
// 	// activeView: function(templateName){
// 	// 	return Template.instance().selectedView.get()===templateName?'active':null;
// 	// }
// });

// Template.citySelectTemp.events({
// 	'change #citySelect':function(event,template){
// 		var cityVal=$('#citySelect').val();
// 		if($.inArray(cityVal,Pitmobil.launchedLocations)!==-1){
// 			if(cityVal==='Noida' || cityVal==='New Delhi'){
// 				sAlert.info('No offers in New Delhi and Noida currently. However, you can still make your booking in Gurgaon or Faridabad. Thanks!');
// 			}
// 			else{
// 				Session.set('selectedCity',cityVal);
// 				Router.go('carSelect',{'city':cityVal});
// 			}
// 			//localStorage.setItem('selectedCity',cityVal);
// 			//template.selectedCity.set(cityVal);
// 		}
// 	},
// 	'mouseenter .featureDiv':function(event,template){
// 		$(event.target).children('.featureDescription').show(300);
// 		$(event.target).children('.featureImage').hide(300);
// 	},
// 	'mouseleave .featureDiv':function(event,template){
// 		$(event.target).children('.featureImage').show(300);
// 		$(event.target).children('.featureDescription').hide(200);
// 	}
// });

// Template.carBrandSelect.events({
// 	'click .brandImgDiv':function(event,template){
// 		var name=this.name;
// 		Router.go('carSelect',{'city':template.get('selectedCity').curValue},{query:{'brand':name}});
// /*		var x=template.get('selectedView');
// 		x.set('carModelSelect');*/
// 	}
// 	// 'mouseenter .brandImgDiv':function(event,template){
// 	// 	$(event.currentTarget).css('background','#cce2ff');
// 	// },
// 	// 'mouseleave .brandImgDiv':function(event,template){
// 	// 	$(event.currentTarget).css('background','#e7e7e7');
// 	// }
// });

// Template.carBrandSelect.helpers({
// 	'carBrands':function(){
// 		return Pitmobil.brandsLogos;
// 	}
// });



// Template.bookTestDrive.onRendered(function(){

// 	$('#testDriveCarForm')
// 	  .form({
// 	    fields: {
// 	      brand: {
// 	        identifier : 'brand',
// 	        rules: [
// 	          {
// 	            type   : 'empty',
// 	            prompt : 'No brand selected'
// 	          }
// 	        ]
// 	      },
// 	      model:{
// 	        identifier:'model',
// 	        rules:[
// 	        {
// 	          type:'empty',
// 	          prompt:'Please enter a model'
// 	        }
// 	        ]
// 	      },
// 	      variant: {
// 	        identifier : 'variant',
// 	        rules: [
// 	          {
// 	            type   : 'empty',
// 	            prompt : 'Please enter a password'
// 	          }
// 	        ]
// 	      }
// 	    }
// 	  });

// 	  $('#testDriveLocationForm')
// 	  .form({
// 	    fields: {
// 	      location: {
// 	        identifier : 'location',
// 	        rules: [
// 	          {
// 	            type   : 'empty',
// 	            prompt : 'No location selected'
// 	          }
// 	        ]
// 	      }
// 	    }
// 	  });

// 	  $('#testDriveDateForm')
// 	  .form({
// 	    fields: {
// 	      location: {
// 	        identifier : 'date',
// 	        rules: [
// 	          {
// 	            type   : 'empty',
// 	            prompt : 'No location selected'
// 	          }
// 	        ]
// 	      }
// 	    }
// 	  });

// 	  $('#testDriveNumberForm')
// 	  .form({
// 	    fields: {
// 	      number: {
// 	        identifier : 'number',
// 	        rules: [
// 	          {
// 	            type   : 'empty',
// 	            prompt : 'Please enter your number.'
// 	          },
// 	          {
// 	          	type: 'exactLength[10]',
// 	          	prompt: 'Number must be 10 digits long'
// 	          }
// 	        ]
// 	      }
// 	    }
// 	  });

// 	  $('#testDriveNumberVerificationForm')
// 	  .form({
// 	    fields: {
// 	      number: {
// 	        identifier : 'number',
// 	        rules: [
// 	          {
// 	            type   : 'empty',
// 	            prompt : 'Please enter your OTP.'
// 	          },
// 	          {
// 	          	type: 'exactLength[6]',
// 	          	prompt: 'OTP must be 6 digits long'
// 	          }
// 	        ]
// 	      }
// 	    }
// 	  });



// 	Meteor.subscribe('testDriveCars');
// 	// this.$('.datetimepicker').datetimepicker();
// 	Session.set('step',1);
// 	$('#testDriveForm div[data-step]').hide();
// 	$('#testDriveForm div[data-step="1"]').show();
// 	$('#testDriveForm #testDriveLoader').hide();

// 	$('#testDriveDatePicker').pickadate({
// 		min: new Date(),
// 		formatSubmit: 'yyyy/mm/dd'
// 	});
// });

// Template.bookTestDrive.onCreated(function(){
// 	var dict= new ReactiveDict();
// 	dict.set('brand','');
// 	dict.set('model','');
// 	dict.set('variant','');
// 	dict.set('fuelType','');
// 	this.carFilter=dict;
// });


// Template.bookTestDrive.helpers({
// 	'carBrands':function(){
// 		var cars=TestDriveCars.find().fetch();
// 		var distinctData=_.uniq(cars,false,function(d){return d.brand});
// 		return _.pluck(distinctData,"brand");
// 	},
// 	'carModels':function(){
// 		var brand=Template.instance().carFilter.get('brand');
// 		console.log(brand);
// 		if(brand==='')
// 			return [];
// 		else{
// 			var cars=TestDriveCars.find({'brand':brand}).fetch();
// 			var distinctData=_.uniq(cars,false,function(d){return d.model});
// 			return _.pluck(distinctData,"model");
// 		}
// 	},
// 	'carVariants':function(){
// 		var model=Template.instance().carFilter.get('model');
// 		console.log(model);
// 		if(model==='')
// 			return [];
// 		else{
// 			var cars=TestDriveCars.find({'model':model}).fetch();
// 			// var distinctData=_.uniq(cars,false,function(d){return d.variant});
// 			return _.pluck(cars,"variant");
// 		}	
// 	}
// });

// Template.bookTestDrive.events({
// 	'change #testDriveBrand': function(event,templ){
// 		// console.log('haww');
// 		templ.carFilter.set('brand',event.target.value);
// 		if(!event.target.value)
// 			templ.carFilter.set('model','');
// 	},
// 	'change #testDriveModel': function(event,templ){
// 		templ.carFilter.set('model',event.target.value);
// 		if(!event.target.value)
// 			templ.carFilter.set('variant','');
// 	},
// 	'change #testDriveVariant':function(event,templ){
// 		templ.carFilter.set('variant',event.target.value);
// 	},
// 	'submit form': function(event){
// 		event.preventDefault();
// 		console.log('lollllllllz');
// 		var step = Session.get("step");
// 		var slide = $('#testDriveForm div[data-step="'+step+'"]');
// 		step = step + 1;
// 		if(step == 6){
// 			return;
// 		}
// 		slide.fadeOut(function(){
// 			$(this).next().fadeIn();
// 		});
// 		Session.set("step",step);
// 	},
// 	'click .prevSlide': function(event){
// 		event.preventDefault();
// 		var step = Session.get("step");
// 		var slide = $('#testDriveForm div[data-step="'+step+'"]');
// 		step = step - 1;
// 		if(slide.prev() == undefined){
// 			return;
// 		}
// 		slide.fadeOut(function(){
// 			$(this).prev().fadeIn();
// 		});
// 		Session.set("step",step);
// 	},
// 	'click #anotherTestDrive': function(event){
// 		event.preventDefault();
// 		Session.set("step",1);
// 		$('#testDriveCarForm').form('clear');
// 		$('#testDriveLocationForm').form('clear');
// 		$('#testDriveDateForm').form('clear');
// 		$('#testDriveNumberForm').form('clear');
// 		$('#testDriveForm div[data-step]').hide();
// 		$('#testDriveForm div[data-step="1"]').fadeIn();
// 		$('#testDriveForm #testDriveLoader').hide();
// 		$('#beforeLoader').show();
// 	},
// 	'submit #testDriveNumberForm': function(event){
// 		event.preventDefault();
// 		var phoneNumber = $('#testDriveContact').val();
		
// 		Meteor.call("requestOTP", phoneNumber,function(e,r){
// 			if(e){
// 				sAlert.error(e.reason);
// 				console.log(e);
// 			}
// 		});
// 		//console.log(session_id);
// 		//console.log(session_id.Details);
	
// 	},
// 	'submit #testDriveNumberVerificationForm': function(event){
// 		event.preventDefault();
// 		var car = {
// 			brand: $('#testDriveBrand').val(),
// 			model: $('#testDriveModel').val(),
// 			variant: $('#testDriveVariant').val(),
// 		};
// 		var userInfo={
// 			address: $('#testDriveLocation').val(),
// 			timeRequested: $('#testDriveDatePicker').val(),
// 			phoneNumber: $('#testDriveContact').val()
// 		};	
// 		var otp_input = $('#testDriveOTP').val();

// 		$('#beforeLoader').hide();
// 		$('#testDriveForm #testDriveLoader').show();
// 		try{
		 	
// 		//	console.log(response_verify);
// 		//	console.log(response_verify.Details);

// 			Meteor.call("OTPVerify",otp_input,function(e,r){
// 				if(e)
// 					sAlert.error('Haww! Aapne ye kya kar dia :O');
// 				else{
// 					sAlert.info('Aapka number hamari API ke hisaab se sahi hai(BC, iss API ke to paise bhi die hai)');	
// 					Meteor.call("requestTestDrive",car,userInfo, function(e,r){
// 						if(e){
// 							// $('#testDriveForm #testDriveLoader').html("Error!");
// 							sAlert.error(e.reason);
// 							console.log(e);
// 						}
// 						else{
// 							$('#testDriveForm #testDriveLoader').hide();
// 							var step = Session.get("step");
// 							var slide = $('#testDriveForm div[data-step="'+step+'"]');
// 							step = step + 1;
// 							if(slide.next() == undefined){
// 								return;
// 							}
// 							slide.fadeOut(function(){
// 								$(this).next().fadeIn();
// 							});
// 							Session.set("step",step);
// 						}
// 					});
			
// 				}
// 		});
// 	}
// 		catch(e){
// 			console.log(e);
// 		}
// 	}
// });