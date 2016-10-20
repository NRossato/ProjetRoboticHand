'use strict';

angular.module('robot.manager').config(['$routeProvider',
    function ($routeProvider) {
        $routeProvider
            .when('/api/config', {
                templateUrl: 'app/features/api/config/configView.html',
                controller: 'ConfigViewController',
                title: 'API CONFIGURATION'
            })
            .when('/robot/hand', {
                templateUrl: 'app/features/robot/hand/handView.html',
                controller: 'HandController',
                title: 'HAND CONTROLLER'
            })
            .otherwise({
                redirectTo: '/api/config'
            });
    }]);