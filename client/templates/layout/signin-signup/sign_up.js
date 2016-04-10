Template.signUp.onRendered(function(){
  $('.ui.checkbox').checkbox();
  $('.ui.form')
    .form({
      fields: {
        username: {
          identifier : 'username',
          rules: [
            {
              type   : 'regExp[/^[a-zA-Z0-9_-]{6,12}$/]',
              prompt : 'Username should be 6-12 in length, and count contain only letters, numbers, \'_\' and \'-\' '
            }
          ]
        },
        email:{
          identifier:'email',
          rules:[
          {
            type:'email',
            prompt:'Please enter a valid email'
          }
          ]
        },
        password: {
          identifier : 'password',
          rules: [
            {
              type   : 'empty',
              prompt : 'Please enter a password'
            },
            {
              type   : 'minLength[6]',
              prompt : 'Your password must be at least 6 characters'
            }
          ]
        },
        tnc:{
          identifier: 'tnc',
          rules:[
          {
            type: 'checked',
            prompt:'You must agree to our Terms & Condition before using this site'
          }
          ]
        }
      }
    });
});


Template.signUp.events({
  'submit form': function(e, template) {
    e.preventDefault();
    var username=e.target.username.value;
    var email = e.target.email.value;
    var password = e.target.password.value;

    $('#submitButton').addClass('loading');

    Accounts.createUser({
      username:username,
      email: email,
      password: password
    }, function(error) {

      $('#submitButton').removeClass('loading');
      
      if (error) {
        sAlert.error(error.reason);
      }
      else{
        redirection();
        Meteor.setTimeout(function(){
          Meteor.call('userEmailVerifySend',Meteor.userId());
          sAlert.info('Sign up successfull. A verification link has been sent to your registered e-mail address.');
          Meteor.call('verifyEmailAddress',Meteor.user());
        },200);
        }
    });
  }
});

Accounts.onEmailVerificationLink(function(token, done) {
  Accounts.verifyEmail(token, function(error) {
    if(error) {
      sAlert.error('This verification link is no longer valid. Request a new link from your user panel.');
    } else {
      sAlert.info('Your email has been verified! Welcome to helpy!');
    }
  });
});

var redirection=function(){
  console.log("Status:",Meteor.user());
  if(Meteor.user().status==="incomplete")
    Router.go('getStarted');
  else
    history.go(-1);
};

