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
	'setEvent':function(){
		
	}
});