Package.describe({
  name: 'akshay:nexmo',
  version: '0.0.2',
  // Brief, one-line summary of the package.
  summary: 'send message through nexmo',
  // URL to the Git repository containing the source code for this package.
  git: '',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.use('meteorhacks:npm'); //need easynexmo dependency
  api.use('meteorhacks:async');
  api.versionsFrom('1.1.0.2');
  api.addFiles('nexmo.js');
  api.export('EasyNexmo','server');
});

Package.onTest(function(api) {
  api.use('tinytest');
  api.use('akshay:nexmo');
  api.addFiles('nexmo-tests.js');
});
