'use strict';

/**
 * @ngdoc function
 * @name yeomanDemoApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the yeomanDemoApp
 */
angular.module('contactApp')
    .controller('MainCtrl', function($scope, $http) {
        $http.get('../../MOCK_DATA.json').then(function(response) {
            $scope.contacts = response.data;
        });

        $scope.resetFilter = function(filterKey) {
            if ($scope.customFilter[filterKey]) {
                $scope.customFilter[filterKey] = '';
            } else {
                $scope.search = '';
            }
        };
    });
