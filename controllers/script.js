// Code goes here
var app = angular.module( "app1", []);

app.controller( 'controller1', function($scope){
  $scope.user = user;
});

var user = {
  name: 'Goku',
  idade: 25,
  sexo: 'm'
};