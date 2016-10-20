'use strict';

angular.module('robot.manager').service('ApplicationService',['ITlocalStorage','Application',function(ITlocalStorage,Application){

    function _load(){
        var application = ITlocalStorage.load();
        console.log('Chargement');
        return application ? application : new Application();
    }

    return {    load : _load,
                save : ITlocalStorage.save,
            }
}]);