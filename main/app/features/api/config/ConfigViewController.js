/**
 * Created by NRO on 19/10/2016.
 */
'use strict';

angular.module('robot.manager').controller('ConfigViewController',['$scope','ApplicationService',function($scope,ApplicationService){

    $scope.application = ApplicationService.load();
    $scope.applicationService = ApplicationService;
    console.log('passe dans configViewController');

}]);
