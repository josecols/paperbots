(function () {

  var app = angular.module('paperbots');
  
  app.directive("fullPage", function ($window) {
    return {
      restrict: "A",
      link: function (scope, element, attrs) {
        angular.element(element).css('height', $window.innerHeight);
      }
    };
  });
})();