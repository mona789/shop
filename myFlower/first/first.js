/**
 * Created by lenovo on 2017/3/17.
 */
//��ҳģ��
(function (angular) {
    var app=angular.module('first',['ngRoute']);
    //2.·�ɹ���
    app.config(['$routeProvider',function ($routeProvider) {
        $routeProvider.when('/first',{
            //��ʲô��ʱ�����
            templateUrl:'./first/first.html',
            controller:'firstflowerController'
        })
    }])
    app.controller('firstflowerController',['$scope',function ($scope) {
        $scope.data = []
    }])
})(angular)