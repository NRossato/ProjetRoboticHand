'use strict';

angular.module('robot.manager').controller('HandController',['RobotPlayerService','ApplicationService','Step','ITlocalStorage','$scope','$timeout',
    function(RobotPlayerService, ApplicationService,Step, ITlocalStorage,$scope,$timeout){

        $scope.currentStep = new Step();
        $scope.application = ApplicationService.load();
        RobotPlayerService.playHand($scope.currentStep.hand);

        $scope.$watch('currentStep.hand',function(){
                     RobotPlayerService.playHand($scope.currentStep.hand).then(function () {
                                                 $scope.requestInfo = 'success'; }
                                                 ,function(){$scope.requestInfo = 'error';
                            })
                    }),true;

        $scope.addStepToPlayList = function(){
            $scope.application.playlist.push($scope.currentStep);
            $scope.currentStep = new Step ($scope.currentStep);
        };

        $scope.playPlayList = function(index){
            var i = index ? index : 0;
            console.log('success');

            RobotPlayerService.playHand($scope.application.playlist[i].hand).then(function(){

                if (i < $scope.application.playlist.length){
                    i++;
                    $timeout(function(){
                        $scope.playPlayList(i);
                        console.log('play ' +i);
                    },750);

                }
            })
        };

        $scope.addHandToPlayList= function(step){
            $scope.application.playlist.push($scope.currentStep);
            ApplicationService.save($scope.application);
            $scope.currentStep = new Step(step);
        };

        $scope.deleteAll= function(){
            ITlocalStorage.deleteAll();
            $scope.application = ApplicationService.load();
        };

}]);