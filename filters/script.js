// code is here
var app = angular.module("app1", []);

app.controller('controller1', function ($scope) {
  $scope.users = myUsers;
});

var myUsers = [{
    name: 'Goku',
    type: 'Sayajin',
    agility: 500,
    power: 500
},{
    name: 'Gohan',
    type: 'Sayajin',
    agility: 100,
    power: 100
}, {
    name: 'Yamcha',
    type: 'Human',
    agility: 10,
    power: 10
}, {
    name: 'Piccolo',
    type: 'Namekuseijin',
    agility: 50,
    power: 30
}, {
    name: 'Vegeta',
    type: 'Sayajin',
    agility: 90,
    power: 100
}, {
    name:'Mestre Kame',
    type: 'Human',
    agility: '200',
    power: '500'
}];