/*
* @Author: Manraj Singh
* @Date:   2016-04-09 23:30:32
* @Last Modified by:   Manraj Singh
* @Last Modified time: 2016-04-10 00:38:09
*/

Template.admin.helpers({
	anyPost:function(){
		return true;
		//return (Posts.find({"validTill":{"$gt":new Date()}}).count()>0)?true:false;
	},
	allPosts:function(){
		var count=1;
		//var x= POST.find({"validTill":{"$gt":new Date()}}).fetch();
		var x = [{
			id: "sandkjasnkdn",
			name: "Manraj Singh",
			contact: "9898989898",
			address: "Hahahahahahahhahahahahhahahahahahhaha",
			postDetails: "This is an SOS call, muahaha pls halpsjkaajsdkjhas j kdhajkshdkjahs jkdhkajshdkjah skjdhakjshd jkashdkjh me lelz #Munna"
		},{
			id: "sandkjasnkdn",
			name: "Manraj Singh",
			contact: "9898989898",
			address: "Hahahahahahahhahahahahhahahahahahhaha",
			postDetails: "This is an SOS call, muahaha pls halp me lelz #Munna"
		},{
			id: "sandkjasnkdn",
			name: "Manraj Singh",
			contact: "9898989898",
			address: "Hahahahahahahhahahahahhahahahahahhaha",
			postDetails: "This is an SOS call, muahaha pls halp me lelz #Munna"
		},{
			id: "sandkjasnkdn",
			name: "Manraj Singh",
			contact: "9898989898",
			address: "Hahahahahahahhahahahahhahahahahahhaha",
			postDetails: "This is an SOS call, muahaha pls halp me lelz #Munna"
		},{
			id: "sandkjasnkdn",
			name: "Manraj Singh",
			contact: "9898989898",
			address: "Hahahahahahahhahahahahhahahahahahhaha",
			postDetails: "This is an SOS call, muahaha pls halp me lelz #Munna"
		}];
		x.forEach(function(sos){
			sos.index=count++;
		});
		return x;
	}
});

Template.admin.events({
	'click .postDetails': function(event, template){
		Session.set("id",this.id);
		console.log(this.id);
	}
});