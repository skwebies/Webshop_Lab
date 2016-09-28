/// <reference path="../angular.js" />

angular.module("webShopModule")
    .controller("MainController",
    [
        "$scope",
        "$location",
        "$route",

        function($scope, $location, $route) {
            $scope.$route = $route;

            $scope.products = [];

            $scope.loadProducts = function() {
                var dataString = localStorage.getItem("products");

                if (dataString)
                    $scope.products = JSON.parse(dataString);
            }

            $scope.saveProducts = function() {
                var jsonString = JSON.stringify($scope.products);
                localStorage.setItem("products", jsonString);
            }

            $scope.loadProducts();

            $scope.go = function(url) {
                $location.path(url);
            }
        }
    ]);