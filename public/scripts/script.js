var myApp = angular.module('myApp', []);

myApp.controller('mainController', ['$scope', '$http', function($scope, $http){
  $scope.array = [];
  $scope.addThing = function(){
    console.log('thing', $scope.thing);
    $scope.test = {
      thing: $scope.thing,
      picture: $scope.picture
    };
    $scope.array.push($scope.test);
    console.log($scope.array);
  };
}]);
