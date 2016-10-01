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
                description: ""
                
                
            };

            $scope.addProduct = function () {

                $scope.newProduct.id = Date.now();
                
                $scope.products.push($scope.newProduct);
                $scope.newProduct = {};

                $scope.saveProducts();

            }



            //$scope.imageLoad = function (id) {
            //    return IMAGES[id];
            //}

            //var IMAGES = {
            //    1: 'toy1.jpg',
            //    2: 'toy2.jpg',
            //    3: 'toy3.jpg',
            //    4: 'toy4.jpg',
            //    5: 'toy5.jpg',
            //    6: 'toy6.jpg',
            //}





            $scope.visible = false;

            $scope.editProduct = function(product) {
                $scope.current = product;
                
                $scope.saveProducts();
            }

            $scope.updateProduct = function() {
                $scope.current = {};
                
                $scope.saveProducts();
            }

            $scope.removeProduct = function(index) {
                $scope.products.splice(index, 1);
                $scope.saveProducts();
            }
        }
    ]);