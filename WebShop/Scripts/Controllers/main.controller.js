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

            //Cart Products Defined as array
            $scope.cartProducts = [];

            //adding products to cart and counting them
            $scope.addToCart = function (product) {
                $scope.cartProducts.push(product);
                $scope.saveCartProducts();
                for (var i = 0; i < $scope.cartProducts.length; i++) {
                    $scope.productCount = i + 1;
                    $scope.saveCartProducts();
                }          

            }

            $scope.removeCartProducts = function (index) {
                $scope.cartProducts.splice(index, 1);

                for (var i = 0; i < $scope.cartProducts; i++) {
                    $scope.productCount = i - 1;
                }
                $scope.saveCartProducts();
            }

            


            $scope.loadProducts = function() {
                var dataString = localStorage.getItem("products");

                if (dataString)
                    $scope.products = JSON.parse(dataString);
            }

            $scope.saveProducts = function() {
                var jsonString = JSON.stringify($scope.products);
                localStorage.setItem("products", jsonString);
            }

            //Cart Products Loads
            $scope.loadCartProducts = function () {
                var dataString = localStorage.getItem("cartProducts");

                if (dataString)
                    $scope.cartProducts = JSON.parse(dataString);

                
            }

            //saving cart Products
            $scope.saveCartProducts = function () {
                var jsonString = JSON.stringify($scope.cartProducts);
                localStorage.setItem("cartProducts", jsonString);
            }
            
            $scope.loadProducts(); //initial load for products

            
            $scope.loadCartProducts(); // initial load for cart products

            $scope.go = function(url) {
                $location.path(url);
            }
        }
    ]);