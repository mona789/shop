/**
 * Created by lenovo on 2017/3/17.
 */
//首页模块
(function (angular) {
    var app=angular.module('first',['ngRoute']);
    //2.路由规则
    app.config(['$routeProvider',function ($routeProvider) {
        $routeProvider.when('/first',{
            //当什么的时候访问
            templateUrl:'./first/first.html',
            controller:'firstflowerController'
        })
    }])
    app.controller('firstflowerController',['$scope',function ($scope) {
        $scope.data = []
    }])
})(angular)