var appname = angular.module('store', []);
appname.controller('Product',['$scope',
    function($scope){
        $scope.products = [
            {name : "Diamond1",
            price : 45,
            description : "Pure white diamond",
            canPurchase : true},
            {name : "Diamond2",
            price : 50,
            description : "Pure black diamond",
            canPurchase : true},
            {name : "Diamond3",
            price : 100000,
            description : "Nihilistic diamond",
            canPurchase : 0}
            ];
}]);
console.log("hahaha");
