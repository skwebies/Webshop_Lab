/// <reference path="../angular.js" />

angular.module("webShopModule")
    .controller("AdminController",
    [
        "$scope",

        function($scope) {
            $scope.title = "Administration";
        }
    ]);