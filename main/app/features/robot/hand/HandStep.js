'use strict';

angular.module('robot.manager').factory('Step',['Hand',function (Hand) {

    function Step(previousStep) {
        this.stepIndex= previousStep ? previousStep.stepIndex + 1 : 0;
        this.hand = previousStep ? angular.copy(previousStep.hand,this.hand) : new Hand ();
        return this;
    }

    return function(previousStep){return new Step(previousStep);};
}]);