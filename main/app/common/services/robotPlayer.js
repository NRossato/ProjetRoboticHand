'use strict';

angular.module('robot.manager').service('RobotPlayerService',['ApplicationService','$http',function(ApplicationService, $http){

    function _playHand(hand){
        console.log(hand);
                return  $http ({
                method:'GET',
                url: ApplicationService.load().API.URL + 'fingers',
                params:hand
              });
    }
    return {
        playHand : _playHand
    };

}]);