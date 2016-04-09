Template.map.onRendered(function(){
  $('.ui.checkbox').checkbox();
  $('#eventForm')
    .form({
      fields: {
        crime: {
          identifier : 'crime',
          rules: [
            {
              type   : 'empty',
              prompt : 'Please enter a valid Crime Type.'
            }
          ]
        },
        broadcast:{
          identifier: 'broadcast'
        }
      }
    });
});


Template.map.events({
  'submit #eventForm': function(e, template) {
    e.preventDefault();
    var obj={};
    obj.crimeType=e.target.crime.value;
    obj.broadcast=e.target.broadcast.value;
    obj.description=e.target.description.value;
    obj.latitude=Session.get('setLat');
    obj.longitude=Session.get('setLong');
    obj.address=Session.get('address');
    console.log(obj);
     $('#submitButton').addClass('loading');
    Meteor.call('setEvent',obj,function(err,result){
     
      if(err){
        console.log(err);
        sAlert.error(err.reason);
      }
      else{
        if(result.logged===false){
          sAlert.error('Logged out');   
          Router.go('signin');
        }else{
          sAlert.info('Crime reported successfully.');
          $('#submitButton').removeClass('loading');  
        }
        
      }
    });
    // var email = e.target.email.value;
    // var password = e.target.password.value;
    // var confirm = e.target.confirm.value;
    // if(!username)
    //   throwError('Username is required!');
    // else if(!email)
    //   throwError('E-mail is required');
    // else if(password!==confirm)
    //   throwError('The confirm password should match');
    // else

   

  }
});
