/// <reference path="../angular.js" />

angular.module("webShopModule")
    .controller("HomeController",
    [
        "$scope",

        function($scope) {
            $scope.title = "Home";

            //homePage Slider images
            $scope.slides = [
                {
                    image: 'Images/sliders/car.jpg'
                },
                {
                    image: 'Images/sliders/doll.jpg'
                },
                {
                    image: 'Images/sliders/elephant.jpg'
                }
            ];


        }
    ]);