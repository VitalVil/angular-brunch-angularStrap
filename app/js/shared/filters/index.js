'use strict';

module.exports = angular.module('app.filters', [])

.filter('interpolate', require('./interpolate'));