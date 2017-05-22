/* global app */
app.controller('MainController', ['$scope', 'myFactory', '$q', function($scope, myFactory, $q) {
    /* USED FOR LOGGING */
    var scripts = document.getElementsByTagName('script');
    var lastScript = scripts[scripts.length - 1];
    var scriptName = lastScript.src;
    var fileName = scriptName.slice(scriptName.lastIndexOf('/') + 1);
    var fileName = "*" + fileName + "*";
    //////////////////////////

    $scope.answer = myFactory.permanent;

    $scope.submitPage = function() {
        var time1 = Date.now();
        console.log("Submitting...");
        var pass = $scope.operand1 || "";
        if (pass.length < 1) {
            alert("Please enter a value");
            return;
        }

        myFactory.create({
            operand1: $scope.operand1,
            operand2: $scope.operand2,
            operator: $scope.operator
        }).then(function(response) {
            console.log("Response: ", response.data.answer);
            $scope.answer = response.data.answer;
        });
        console.log("$scope.answer: ", $scope.answer);


    };

    $scope.getPage = function() {
        console.log("Getting...");
        myFactory.myload({
            title: $scope.mytitle
        });
        console.log("Got!");
    };
}]);
