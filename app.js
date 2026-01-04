var app = angular.module('app', ['ngRoute']);

app.config(function($routeProvider) {
  $routeProvider
    .when('/', {
      templateUrl: 'login.html',
      controller: 'LoginController'
    })
    .when('/ujian', {
      templateUrl: 'ujian.html',
      controller: 'UjianController'
    })
    .otherwise({
      redirectTo: '/'
    });
});
