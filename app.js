var appname = angular.module('store', []);
appname.controller('greetings', ['$scope',
function($scope){
    $scope.vars = {hi:"Hello World!",
question:"How you doin?"};
}]);
