(function () {

  var app = angular.module('paperbots');

  app.directive("fold", function ($window) {
    return {
      restrict: "A",
      link: function (scope, element, attrs) {
        var opened = false;

        var pfold = $('#section-1 .fondo > div.uc-container').pfold({
          folddirection: ['right', 'bottom'],
          speed: 300,
          onEndFolding: function () {
            opened = false;
          },
          centered: true
        });

        var timer = setInterval(function () {
          if (opened) {
            pfold.fold();
          } else {
            opened = true;
            pfold.unfold();
          }
        }, 5000);
      }
    };
  });
})();