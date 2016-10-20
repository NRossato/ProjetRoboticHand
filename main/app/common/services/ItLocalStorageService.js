/**
 * Created by NRO on 19/10/2016.
 */
'use strict';

angular.module('local-storage.services',[]);

angular.module('local-storage.services')
    .provider('ITlocalStorage',[function(){
        var self = this;
        self.defaultKey = 'IT_KEY';

        this.$get= function(){
            function _save(todoList) {
                if (todoList){
                    localStorage.setItem(self.defaultKey,angular.toJson(todoList));
                }
            }
            function _load(){
                var obj = localStorage.getItem(self.defaultKey);
                if(obj){
                    return angular.fromJson(obj);
                }
                return;
            }

            function _deleteAll(){
                localStorage.removeItem(self.defaultKey);
            }
            return {
                save : _save,
                load : _load,
                deleteAll : _deleteAll
            }
        }
    }])
