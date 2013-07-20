var app = angular.module("app", []);

app.config(function($routeProvider){
	
	$routeProvider.when('login',{
		templateUrl:'tmp/login.html',
		controller: 'LoginController'
	});
		
	$routeProvider.when('register',{
		templateUrl:'tmp/register.html',
	    controller: 'RegisterController'
	});
	
	$routeProvider.when('home',{
		templateUrl:'tmp/home.html',
	    controller: 'HomeController'
	});
	
	$routeProvider.otherwise({ redirectTo : 'home'});
});

app.controller('RegisterController', function($scope, $http, $location){
	
});

app.controller('LoginController', function($scope, $http, $location){
	
});

app.controller('HomeController', function(){

});
