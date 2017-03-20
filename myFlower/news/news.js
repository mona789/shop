/**
 * Created by lenovo on 2017/3/19.
 */
(function (angular) {
    var app=angular.module('news',['ngRoute']);
    app.config(['$routeProvider',function ($routeProvider) {
        $routeProvider.when('/news',{
            templateUrl:'./news/news.html',
            controller:'newsController'
        })
    }])
    app.controller('newsController',['$scope',function ($scope) {
        $scope.data=[];
    }])
})(angular)