angular.module('app')
  .service('mainSrv', function($http) {

    this.getQuote = function () {
      return $http.get('http://quotzzy.co/api/quote')
    }

  })
