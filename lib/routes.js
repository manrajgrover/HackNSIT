Router.configure({
  layoutTemplate: 'layout',
  loadingTemplate: 'loading',
  notFoundTemplate: 'notFound'
});


Router.route('/', {
  name: 'landing',
  template: 'landingPage',
  action: function(){
  		this.render();
  }
});

Router.route('/signin',{
  name:'signin',
  template:'signIn',
  action:function(){
    this.render();
  }
});

Router.route('/signup',{
  name:'signup',
  template:'signUp',
  action:function(){
    this.render();
  }
});

Router.route('/map',{
  name:'map',
  template:'map',
  action:function(){
    this.render();
  }
});


Router.route('/admin',{
  name:'admin',
  template:'admin',
  action:function(){
    this.render();
  }
});
