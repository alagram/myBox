var app = angular.module("myApp", []);

app.config(function($routeProvider) {
  $routeProvider.when('/', {
    templateUrl: "templates/home.html",
    controller: 'HomeController'
  })
  .when('/settings', {
    templateUrl: "templates/settings.html",
    controller: 'SettingsController'
  })
  .otherwise({ redirectTo: '/' });
});

app.controller('HomeController', function($scope) {

});

app.controller('SettingsController', function($scope) {
  $scope.name = "Albert";
});
