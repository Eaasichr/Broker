/**
 * Created by simonchristensen on 03/09/15.
 */
var MainController = function($scope){

    var person = {
        firstName: "Simon",
        lastName: "Christensen"
    };

    $scope.message = "Hello, Angular!";
    $scope.person = person;
};