// code is here
var app = angular.module("app1", []);

app.controller('controller1', function ($scope) {
  $scope.user = myUser;
});

var myUser = {
    name: 'Gohan',
    type: 'Sayajin',
    agility: 100,
    power: 100
};