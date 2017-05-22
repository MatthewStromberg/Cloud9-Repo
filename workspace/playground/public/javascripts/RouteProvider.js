/* global app */
app.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
    $stateProvider
        .state('/testing', {
            url: '/testing',
            templateUrl: '../htmlTemplates/testingTemplate.html',
            controller: 'MainController'
        });
    $urlRouterProvider.otherwise('testing');
    //$locationProvider.html5Mode(true);

}]);
