'use strict';

angular.module('app', [
    'ngSanitize', 
    'ngResource', 
    'ui.router', 
    'mgcrea.ngStrap',

    require('js/config/index').name,
    require('js/shared/services/index').name,
    require('js/shared/directives/index').name,
    require('js/shared/filters/index').name,
    require('js/shared/controllers/index').name,

    /* include pages */
    require('js/pages/home/index').name,
])
.config(['$stateProvider', '$locationProvider', '$urlRouterProvider', 
    function($stateProvider, $locationProvider, $urlRouterProvider) {
        $locationProvider.hashPrefix('!');
        $urlRouterProvider.otherwise('/todo');

        $stateProvider.state('todo', {
            url: '/todo', /* root route */
            views: {
                'mainView': {
                    templateUrl: 'partials/todo.html',
                    controller: 'TodoCtrl'
                }
            }
        }).state('view', {
            url: '/view',
            views: {
                'mainView': {
                    templateUrl: 'partials/partial.html',
                    controller: 'MyCtrl'
                }
            }
        });

        /* Without server side support html5 must be disabled. */
        return $locationProvider.html5Mode(false);
    }]
);