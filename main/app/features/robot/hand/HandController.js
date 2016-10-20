'use strict';

angular.module('robot.manager').controller('HandController',['RobotPlayerService','ApplicationService','Step','ITlocalStorage','$scope',
    function(RobotPlayerService, ApplicationService,Step, ITlocalStorage,$scope){

        $scope.application = ApplicationService.load();

        console.log(Step);
        $scope.currentStep = new Step();
        RobotPlayerService.playHand($scope.currentStep.hand);

   /*    $timeout('currentStep.hand',function({

        })) */

        $scope.$watch('currentStep.hand',function(){
                     RobotPlayerService.playHand($scope.currentStep.hand).then(function () {
                                                 $scope.requestInfo = 'success'; }
                                                 ,function(){$scope.requestInfo = 'error';
                            })
                    }),true;



        $scope.addHandToPlayList= function(step){
            $scope.application.playlist.push(step);
            ApplicationService.save($scope.application);
            $scope.currentStep = new Step(step);
        };

        $scope.deleteAll= function(){
            ITlocalStorage.deleteAll();
            $scope.application = ApplicationService.load();
        };

}]);