'use strict';

module.exports = ['$scope', '$location',
 function ($scope, $location) {
        // Uses the url to determine if the selected
        // menu item should have the class active.
        $scope.$location = $location;

        $scope.$watch('$location.path()', function(path) {
            return $scope.activeNavId = path || '/';
        });

        /* getClass compares the current url with the id.
         * If the current url starts with the id it returns 'active'
         * otherwise it will return '' an empty string. E.g.
         *
         *   # current url = '/products/1'
         *   getClass('/products') # returns 'active'
         *   getClass('/orders') # returns ''
         */
        $scope.getClass = function(id) {
            if($scope.activeNavId.substring(0, id.length) === id) {
                return 'active';
            } else {
                return '';
            }
        };
    }
];