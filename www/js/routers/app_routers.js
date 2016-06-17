// criando minhas rotas para cada View 

(function(){
		"use strict";
		angular.module("starter").config(function($stateProvider,$urlRouterProvider){
				$urlRouterProvider.otherwise("/menu/home");

				$stateProvider

				.state("menu",{

						url:"/menu",
						templateUrl:"views/menu.html",
						abstract:true,
						controller:"init"

				})

				.state("menu.home",{
						url:"/home",
						views:{
								'menuContent':{
									templateUrl:"views/home.html"
								}

						}

				})
				.state("menu.pag1",{
						url:"/pag1",
						views:{
								'menuContent':{
									templateUrl:"views/pag1.html"
								}

						}

				})
				.state("menu.pag2",{
						url:"/pag2",
						views:{
								'menuContent':{
									templateUrl:"views/pag2.html"
								}

						}

				});

		});
})();