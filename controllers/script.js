// Code goes here
var app = angular.module("app1", []);

var user = {
  name: 'Goku',
    type: 'Sayajin'
};

app.controller('controller1', function ($scope) {
  $scope.user = user;
});

