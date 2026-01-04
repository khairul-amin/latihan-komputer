var app = angular.module("app", ["ngRoute"]);

app.config(function($routeProvider) {

  $routeProvider
    .when("/login", {
      templateUrl: "login.html",
      controller: "loginController"
    })
    .when("/ujian", {
      templateUrl: "ujian.html",
      controller: "ujianController"
    })
    .otherwise({
      redirectTo: "/login"
    });

});
