Accounts.onCreateUser(function(options, user){

	if(user.services.facebook){
		//user.emails=[];
		user.accType= 'facebook';
		options.profile.picture= 'http://graph.facebook.com/'+user.services.facebook.id +'/picture';
		options.profile.gender=user.services.facebook.gender;
		//user.emails.push({address: user.services.facebook.email, verified: true});
	}else if( user.services.google){
		//user.emails=[];
		user.accType= 'google';
		var pictureLink= user.services.google.picture;
		delete user.services.google.picture;
		options.profile.picture= pictureLink;
		//GOOGLE PICTURE IS TOO BIG
		options.profile.gender=user.services.google.gender;
		//user.emails.push({address: user.services.google.email, verified: true});
	}
	else if(user.services.twitter){
		user.accType='twitter';
		options.profile.picture=user.services.twitter.profile_image_url;
		options.profile.firstName=user.services.twitter.screenName;
		user.profile=options.profile;
		user.roles=['customer'];
	}else if(user.services.password){
		if(options.profile && options.profile.roles){
			user.roles=options.profile.roles;			
		}else{
			user.roles=['customer'];
		}
			user.accType='password';
		options.profile={};
	}

	if(user.services.facebook||user.services.google){
		var name= options.profile.name;
		delete options.profile.name;
		options.profile.firstName=name.split(' ')[0];
		options.profile.lastName=name.split(' ')[1];
		user.profile = options.profile;
		user.roles=['customer'];
	}
	user.status="incomplete";	 
	return user;
	
});