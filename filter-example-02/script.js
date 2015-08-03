// Code goes here
var app = angular.module('app1', []);

app.controller('controller1', function($scope) {
   $scope.produtos = meuProduto;
   $scope.selecionado = 0;
    
   $scope.estaSelecionado = function ( sel ) {
    return $scope.selecionado == sel;
   }
   $scope.selecionar = function ( sel ) {
    $scope.selecionado = sel;
   }
})


var meuProduto = [{
   id: 0,
   nome: 'TV',
   preco: 2999.00,
   estoque: 5,
   imagem: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e2/LG_smart_TV.jpg/800px-LG_smart_TV.jpg'
}, {
   id:1,
   nome: 'DVD Player',
   preco: 349.50,
   estoque: 3,
   imagem: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/60/DVD_player_Philips.jpg/800px-DVD_player_Philips.jpg'
}, {
   id:2,
   nome: 'Videogame',
   preco: 799,
   estoque: 7,
   imagem: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/39/PSX-Console-wController.jpg/1920px-PSX-Console-wController.jpg'
}];