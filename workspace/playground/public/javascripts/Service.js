/*Angular communications with data going to DB*/
/* global angular */
/* global app */

app.factory('myFactory', ['$http', '$q', function($http, $q) {
    /* USED FOR LOGGING */
    var scripts = document.getElementsByTagName('script');
    var lastScript = scripts[scripts.length - 1];
    var scriptName = lastScript.src;
    var fileName = scriptName.slice(scriptName.lastIndexOf('/') + 1);
    var fileName = "*" + fileName + "*";
    //////////////////////////

    var myData = {
        testVar: "This is a test string",
        sampleJSON: {},
        permanent: 'Empty to start'
    };

    myData.create = function(post) {
        console.log("create");
        return $http.post('/testing', post).then(function(response) {
                console.log(fileName, "Finished: ", response);
                return response;
            }).catch(function(response) {
                console.error(fileName, 'HTTP Post error', response.status, response.data);
            })
            .finally(function(response) {
                console.log(fileName, "Finished posting");
            }); // this will return a promise to controller
    };




    myData.myload = function(title) {
        return $http.get("/", title).then(function(response) {
                console.log("Getting data...");
                console.log(title);
            })
            .catch(function(response) {
                console.error('HTTP Get Error', response.status, response.data);
            })
            .finally(function() {
                console.log("Finished getting data");
            }); // this will return a promise to controller
    };
    /*
        myData.myFunction = function() {
            return $http.get("../assets/test.json").then(function(response) {
                    console.log("Getting data...");
                    myData.sampleJSON = response.data;
                })
                .catch(function(response) {
                    console.error('HTTP Get Error', response.status, response.data);
                })
                .finally(function() {
                    console.log("Finished getting data");
                }); // this will return a promise to controller
        };
    */

    return myData;
}]);
