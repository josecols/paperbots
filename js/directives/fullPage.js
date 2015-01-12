(function () {

  var app = angular.module('paperbots');

  app.directive("fullPage", function ($window) {
    return {
      restrict: "A",
      link: function (scope, element, attrs) {
        angular.element(element).css('height', $window.innerHeight);
        angular.element($window).on('resize', function () {
          angular.element(element[0].getElementsByClassName('section')).css('height', $window.innerHeight);
        });
      }
    };
  });
})();