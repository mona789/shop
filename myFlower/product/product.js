/**
 * Created by lenovo on 2017/3/19.
 */
(function (angular) {
    var app=angular.module('product',['ngRoute']);
    app.config(['$routeProvider',function ($routeProveider) {
        $routeProveider.when('/product',{
            templateUrl:'./product/product.html',
            controller:'productController'
        })
    }])
    app.controller('productController',['$scope',function ($scope) {
        $scope.data=[];
    }])
})(angular)