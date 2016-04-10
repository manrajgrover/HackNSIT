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
		Session.set("id",this._id);
		console.log(this._id);
	}
});

Template.admin.onRendered(function(){
	var d= document.createElement('div');
	  d.innerHTML='<i class="fa fa-video-camera">';
	  $(document.body).append($(d).addClass('floater-closed').addClass('floater'));
	  var open =false;
	  $('.floater').click(function(){
	    if(open===false){
	      var iframe = document.createElement('iframe');
	      iframe.src = "https://dev.peery.me/help/"+Session.get('id')+'?support=true';//change
	      $(this).append(iframe);
	      $(this).removeClass('floater-closed').addClass('floater-open');   
	      
	      open=true;
	    }else{
	      $('iframe').remove();
	      $(this).removeClass('floater-open').addClass('floater-closed')
	      open=false;
	    }
	  })
});