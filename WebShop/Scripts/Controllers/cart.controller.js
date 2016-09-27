/// <reference path="../angular.js" />

angular.module("webShopModule")
    .controller("CartController",
    [
        "$scope",

        function($scope) {
            $scope.title = "Shopping Cart";
        }
    ]);