/**
 * Created by lenovo on 2017/3/19.
 */
(function (angular) {
    var app=angular.module('brand',['ngRoute'])
    app.config(['$routeProvider',function ($routeProvider) {
        $routeProvider.when('/brand',{
            templateUrl:'./brand/brand.html',
            controller:'brandController'
        })
    }])
    app.controller('brandController',['$scope',function ($scope) {
        $scope.data=[];
    }])
})(angular)