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
                
                
                
            };

            $scope.newCategory = {
                name: ""
            };

            $scope.addProduct = function () {

                $scope.newProduct.id = Date.now();
                
                $scope.products.push($scope.newProduct);
                $scope.newProduct = {};

                $scope.saveProducts();

            }

            $scope.createCategory = function () {
                $scope.newCategory.id = Date.now();

                $scope.categories.push($scope.newCategory);
                $scope.newCategory = {};
                $scope.saveCategories();

            }



            $scope.visible = false;

            $scope.editProduct = function(product) {
                $scope.current = product;
                
                $scope.saveProducts();
            }

            $scope.updateProduct = function () {

                $scope.current = {};
                
                $scope.saveProducts();
                $scope.updateCategory();

            }


            $scope.updateCategory = function () {
               
                $scope.categories.push($scope.products.categories);
                $scope.saveCategories();
            }

            $scope.removeProduct = function(index) {
                $scope.products.splice(index, 1);
                $scope.saveProducts();
            }
        }
    ]);