/// <reference path="../angular.js" />

angular.module("webShopModule")
    .controller("AdminController",
    [
        "$scope",

        function($scope) {
            $scope.title = "Administration";

            $scope.newProduct = {
                name: "",
                price: "",
                description: "",
                thumbnail: "",
                image:""
            };

            $scope.addProduct = function () {
                $scope.newProduct.id = Date.now();
                $scope.products.push($scope.newProduct);
                $scope.newProduct = {};

                $scope.saveProducts();

            }
        }
    ]);