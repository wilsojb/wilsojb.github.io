(function () {
  'use strict';
  angular
    .module('personal', [])
    .run(function($log) {
      // scale fix for iPhone
      var metas = document.getElementsByTagName('meta');
      var i;
      if (navigator.userAgent.match(/iPhone/i)) {
        for (i=0; i<metas.length; i++) {
          if (metas[i].name == "viewport") {
            metas[i].content = "width=device-width, minimum-scale=1.0, maximum-scale=1.0";
          }
        }
        document.addEventListener("gesturestart", gestureStart, false);
      }

      function gestureStart() {
        for (i=0; i<metas.length; i++) {
          if (metas[i].name == "viewport") {
            metas[i].content = "width=device-width, minimum-scale=0.25, maximum-scale=1.6";
          }
        }
      }

    })
    .controller('landing', function($scope, $log, $timeout){
      // handle page transitions
      $scope.show = {'about': false, 'projects': false, 'reading': false, 'home': true};
      $scope.active = {'about': false, 'projects': false, 'reading': false, 'home': true};

      $scope.transition = function(name) {
        for (var key in $scope.show) {
          if (key != name) {
            $scope.show[key] = false;
            $scope.active[key] = false;
          }
        }
        $scope.active[name] = true;
        $timeout(function(){
          $scope.show[name] = true;
        }, 200);
      };

    });
})();
