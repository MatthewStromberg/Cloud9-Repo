app.controller('TestController', ['$scope', "factoryArg", function($scope) {
    $scope.testData = factoryArg.sampleJSON;
    
}]);
