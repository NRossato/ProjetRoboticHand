'use strict';

angular.module('robot.manager').factory('Application',[function (){

    function Application(){
        this.API = {
            URL : ''
        };
        this.playlist = [];
    }

    return function (){return new Application();}
}]);
