(function() {

  "use strict";

  angular.module('app/debug').controller('DebugCtrl', function($scope, $location, $timeout, config, texts, settings) {
    // Clear cache and re-fetch texts
    $scope.refreshTextList = function() {
      // Fetch text list
      texts.clear();
      texts.fetch(function() {
        // Get all texts  
        $scope.intentions = texts.getAll();
        console.log($scope.intentions);
        // Stop the ion-refresher from spinning
        $scope.$broadcast('scroll.refreshComplete');
      });
    };
    // Initial fetch
    // NOTE: delay so the view transistion happens immediately
    $timeout(function() {
      $scope.refreshTextList();
    }, 1000);
    // Back button clicked
    $scope.backButtonClick = function() {
      $location.path('/textselect');
    };
    // Clear settings
    $scope.clearSettingsClick = function() {
      settings.clear();
      alert('settings cleared');
    };
    // Get image urls
    $scope.imageUrls = config.imageUrls;
  });

}());
