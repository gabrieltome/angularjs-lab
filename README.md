# AngularJS Studies


![AngularJSLogo](https://avatars0.githubusercontent.com/u/139426?v=3&s=400)


##AngularJS
---

>**AngularJS** é um **_framework JavaScript_** de código aberto da Google, baseado no padrão **MVC**, que permite a criação de toda uma aplicação web em uma única página.

#####LINKS IMPORTANTES

[Site oficial](https://angularjs.org)


#####CURSOS

#####ARTIGOS/TUTORIAIS

#####LIVROS


###Vantagens

- Client Side

- Permite a criação de sofisticadas e rápidas aplicações web.

- Ajuda a organizar o código.  (Modular) 

- Se integra bem com várias outras tecnologias web, como jQuery, Bootstrap, Node, Ionic, ...

####Single Page Application


Uma aplicação de página única é uma aplicação em que todos os recursos são acessados por meio de um único URL.



Em outras palavras, os dados e scripts necessários à aplicação são carregados de forma transparente para o usuário.

#####Problemas de aplicação de página única

- Dificulta a organização de informações e recursos

- Dificulta o acesso direto às páginas internas

- Dificulta a indexação por máquinas de busca

###Arquitetura

![AngularJS Architecture](http://entwicklertagebuch.com/blog/wp-content/uploads/2013/10/modules.jpg)


####Inclusão do AngularJS na página web

```
<DOCTYPE html>
.
. // header
.
	<script src="angular.min.js"></script>
	</body>
</html>
```

###Módulos

- Contém as partes/blocos do código

- Pode usar outros módulos

- Define as dependências da aplicação

- Permite uma boa organização do código, tornando mais legível e fácil de manter

#####Criação de um módulo

######Syntax

```
var app = angular.module( 'nome da aplicação', [ dependências (outros módulos )]);
```

######Example

```
var app = angular.module( 'app1', []);
```

###Diretivas

Atributos especiais nos elementos iniciados por **"ng-"**.

Todo atributo com prefixo "ng-" é pré-processado pelo AngularJS antes de ser apresentado para o usuário.

######Example

```
<DOCTYPE html>
<html lang="pt-br" ng-app="app1">
	.
	. // header
	.
	
	<script src="angular.min.js"></script>
	<script src="app.js"></script>
	</body>
</html>
```

###Expressão

Operações que são calculadas e transformadas em HTML.

######Exemplos

```
{{ 2 + 3}}
```

```
{{ custo * quantidade }}
```

#####Definição do módulo


```
<p> {{ "Olá " + "Mundo" }} </p>
```


