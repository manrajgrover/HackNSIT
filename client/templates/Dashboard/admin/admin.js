/*
* @Author: Manraj Singh
* @Date:   2016-04-09 23:30:32
* @Last Modified by:   Manraj Singh
* @Last Modified time: 2016-04-10 02:05:02
*/

Template.admin.helpers({
	anyPost:function(){
		return (Events.find({}, {sort: {timestamp: -1}}).count()>0)?true:false;
		//return (Posts.find({"validTill":{"$gt":new Date()}}).count()>0)?true:false;
	},
	allPosts: function(){
		var count=1;
		var x = Events.find({}, {sort: {timestamp: -1}}).fetch();
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