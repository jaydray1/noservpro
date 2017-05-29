angular.module('app', ['ui.router'])
  .config(function($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise('/landing');

    $stateProvider
    .state ('home', {
      url: '/home'
    , templateUrl: './views/home.html'
    , controller: 'mainCtrl'
    })
      .state('landing', {
        url: '/landing'
      , templateUrl: './views/landing.html'
      })
      .state('motivation', {
        url: '/motivation'
      , templateUrl: './views/motivation.html'
      , controller: 'mainCtrl'
      })
      .state('about', {
        url: '/about'
      , templateUrl: './views/about.html'
      })
      .state ('signup', {
        url: '/signup'
      , templateUrl: './views/signup.html'
      })
      .state ('signup-form-lion', {
        url: '/signup-form-lion'
      , templateUrl: './views/signup-form-lion.html'
      })
      .state ('signup-form-gazelle', {
        url: '/signup-form-gazelle'
      , templateUrl: './views/signup-form-gazelle.html'
      })
})
