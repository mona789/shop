/**
 * Created by lenovo on 2017/3/19.
 */
(function (angular) {
    var app=angular.module('shop',['ngRoute']);
    app.config(['$routeProvider',function ($routeProvider) {
        $routeProvider.when('/shop',{
            templateUrl:'./shop/shop.html',
            controller:'shopController'
        })
    }])
    app.controller('shopController',['$scope',function ($scope) {
        $scope.data=[];
    }])
})(angular)