/**
 * Created by NRO on 19/10/2016.
 */
'use strict';

angular.module('robot.manager').factory('Hand',[function(){

    function Hand(){
        this.thumb=180;
        this.index=180;
        this.major=180;
        this.ringfinger=180;
        this.auricular=180;
    }

    return function(){return new Hand();};
}]);