'use strict';

module.exports = angular.module('app.controllers', [])

.controller('AppCtrl', require('./AppCtrl'))
.controller('ModalCtrl', require('./ModalCtrl'))
.controller('MyCtrl', require('./MyCtrl'))
.controller('TodoCtrl', require('./TodoCtrl'));