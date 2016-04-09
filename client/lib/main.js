sAlert.config({
    effect: 'flip',
    position: 'bottom',
    timeout: 5000,
    html: true,
    onRouteClose: false,
    stack: true,
    offset: 0
});


Meteor.startup(function(){
	if (Session.get('lat') == undefined || Session.get('lon') == undefined) {
	    navigator.geolocation.getCurrentPosition(function(position) {
	        var lat = position.coords.latitude;
	        var lon=position.coords.longitude;
	        Meteor.call('getLocation',lat,lon,function(err,result){
	        	if(err){
	        		sAlert.error('Something got messed up!');
	        	}else{
	        		console.log(result.data.results[0]);
	        		Session.set("address", result.data.results[0].formatted_address);
    		        Session.set("setLat", result.data.results[0].geometry.location.lat);
    		        Session.set("setLong", result.data.results[0].geometry.location.lng);
	        	}

	        });
	    });
	}
});