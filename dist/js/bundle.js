'use strict';

angular.module('app', ['ui.router']).config(function ($stateProvider, $urlRouterProvider) {

  $urlRouterProvider.otherwise('/landing');

  $stateProvider.state('home', {
    url: '/home',
    templateUrl: './views/home.html'
  }).state('landing', {
    url: '/landing',
    templateUrl: './views/landing.html'
  }).state('motivation', {
    url: '/motivation',
    templateUrl: './views/motivation.html'
  }).state('about', {
    url: '/about',
    templateUrl: './views/about.html'
  }).state('signup', {
    url: '/signup',
    templateUrl: './views/signup.html'
  }).state('signup-form-lion', {
    url: '/signup-form-lion',
    templateUrl: './views/signup-form-lion.html'
  }).state('signup-form-gazelle', {
    url: '/signup-form-gazelle',
    templateUrl: './views/signup-form-gazelle.html'
  });
});
'use strict';

angular.module('app').controller('mainCtrl', function ($scope, mainSrv) {

  $scope.quote = mainSrv.getQuote().then(function (response) {
    $scope.quote = response.data;
  });
});
'use strict';

angular.module('app').service('mainSrv', function ($http) {

  this.getQuote = function () {
    return $http.get('http://quotzzy.co/api/quote');
  };
});
"use strict";
//# sourceMappingURL=bundle.js.map
