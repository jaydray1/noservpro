angular.module('app')
  .controller('mainCtrl', function($scope, mainSrv) {

    $scope.quote = mainSrv.getQuote().then(function(response) {
      $scope.quote = response.data;
    })

    $scope.recipes = mainSrv.getRecipes();
    $scope.recipes2 = mainSrv.getRecipes2();

    $scope.showMe = function() {
      $scope.show = true;
    }

    })
