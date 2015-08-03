var app = angular.module('app1', []);

app.controller('controller1', function($scope) {
  $scope.produto = meuProduto;
    $scope.avalia = {
        nota: '5'
    };
    $scope.adicionaAvaliacao = function() {
        $scope.avalia.data = Date.now();
        $scope.produto.avaliacoes.push( $scope.avalia );
        $scope.avalia = { nota: '5' };
        $scope.form1.setPristine();
    }
})


var meuProduto = {
   nome: 'TV',
   info: 'TV de 32 polegadas, alta definição, LED, widescreen, com uma entrada VGA e outra HDMI.',
   preco: 2999.00,
   imagem: 'imgs/TV.jpg',
   avaliacoes: [ 
     { data: '2015-06-22T18:30:49-0300', nota: 4, email: 'roberto@gmail.com', comentario: 'Comprei esta tv há aproximadamente 1 ano. Ela é bem leve e fácil de colocar na parede. A imagem é muito boa.' },
     { data: '2015-06-27T12:54:44-0300', nota: 1, email: 'paula@hotmail.com', comentario: 'Adquiri esse aparelho e ele funcionou apenas 20 dias. A tela começou com uns traços brancos e 3 dias depois ficou toda branca e não voltou mais.' }
   ]
};