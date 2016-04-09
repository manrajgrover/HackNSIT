/*
* @Author: Manraj Singh
* @Date:   2016-04-09 21:32:18
* @Last Modified by:   Manraj Singh
* @Last Modified time: 2016-04-09 23:08:11
*/

function initialize(){
	if (navigator.geolocation) {
		navigator.geolocation.getCurrentPosition(function(position){
			console.log("LOL");
			latitude = position.coords.latitude;
			longitude = position.coords.longitude;
			var myLatlng = new google.maps.LatLng(latitude, longitude);
			var mapOptions = {
				zoom: 2,
				center: myLatlng
			}
			map = new google.maps.Map(document.getElementById("map-canvas"), mapOptions);
			var marker = new google.maps.Marker({
				position: myLatlng,
				map: map,
				title:"Your Location"
			});
			var circleOptions = {
				strokeColor: '#B0C4DE',
				strokeOpacity: 0.8,
				strokeWeight: 2,
				fillColor: '#B0C4DE',
				fillOpacity: 0.35,
				map: map,
				center: myLatlng,
				radius: 2609.34
			};
			var circle = new google.maps.Circle(circleOptions);
		},
		function(msg){
			//var s = document.getElementById("status");
			//s.innerHTML = (typeof msg == "string") ? "<h1 style='text-align:center;'>"+msg+"</h1>" : "<h1>Failed to access your location!</h1><p>Please change your browser location settings and allow this website to access your location.</p>";
		});
	} else { 
		// show error message
	}
}


Template.map.onRendered(function(){
	initialize();
});