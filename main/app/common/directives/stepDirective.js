'use strict';

angular.module('ui.step', []).directive('stepHandDir', [function () {

        return {
            restrict: 'EA',
            scope: {
                editable: '=',
                stepModel: '=',
                scale: '='
            },
            template: '<div  style="height: {{250 * scale}}px;" class="step"></div>',


           /* compile: function (element, attributes) {
                return {
                    pre: function (scope, element, attributes, controller, transcludeFn) {
                        if (scope.editable) {
                            scope.step = new Step(element[0].getElementsByClassName("step")[0], scope, scope.stepModel.step);
                        }
                    },
                    post: function (scope, element, attributes, controller, transcludeFn) {


                    }
                }
            }, */

            controller: ['$scope', function ($scope) {
                $scope.stepID = $scope.$id;
            }]
        };

        }]);