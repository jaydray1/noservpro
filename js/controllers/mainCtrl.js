angular.module('app')
  .controller('mainCtrl', function($scope, mainSrv) {

    $scope.quote = mainSrv.getQuote().then(function(response) {
      $scope.quote = response.data;
    })

  })
