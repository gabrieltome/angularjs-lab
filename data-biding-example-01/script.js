// Code goes here
var app = angular.module('app1', []);

app.controller('controller1', function ($scope) {
    $scope.char = myChars;

})


var myChars = {
    name: 'Goku',
    type: 'Sayajin',
    power: 9000
};