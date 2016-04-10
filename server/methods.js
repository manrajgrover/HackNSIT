var Future=Meteor.npmRequire("future");
Meteor.methods({
	'getLocation':function(lat,long){
		// var urls = ["http://maps.googleapis.com/maps/api/geocode/json?latlng="+lat+","+long];
		// var range = _.range(urls.length);
		// var futures = _.map(range,function(index){
		//   var future = new Future();
		//   HTTP.get(urls[index],function(error,result){
		//     future.return(result);
		//   });
		//   return future;
		// });
		// var results = _.map(futures,function(future,index){
		// 	console.log(future)
		//   var result=future.wait();
		//   return result;
		// });
		// return results;
		this.unblock();
		var url="http://maps.googleapis.com/maps/api/geocode/json?latlng="+lat+","+long;
		try{
			var result = HTTP.call("GET",url);
			return result;
		}
		catch(e){
			throw Meteor.Error('Haww!');
		}
		console.log(x);
		return x;
	},
	'setEvent':function(obj){
		var user=Meteor.user();
		//latitude,longitude,address
		console.log(obj);
		if(!user)
		{
			console.log('User not logged in');
			return {
				logged:false
			};
		}
		else{
			obj.userId=Meteor.userId();
			obj.timestamp=new Date();
			if(user.profile&&user.profile.firstName)
				obj.username= user.profile.firstName;
			else
				obj.username=user.username;
			var id=Events.insert(obj);
			return{
				eventId: id,
				logged:true
			};
			// return user.profile.firstName||user.username;
		}

		// var x=Events.insert({})
		
	},
	'sos':function(){
		console.log("Here in SOS");
		//Nexmo.sendTextMessage("9811040427","9650353437","Hey! Your friend is in danger!");
		return{
			logged:true
		};
	}
});