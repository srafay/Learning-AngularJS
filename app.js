var appname = angular.module('store', []);
appname.controller('items',['$scope',
    function($scope){
        $scope.products = [
            {name : "Diamond1",
            price : 45,
            description : "Pure white diamond",
            canPurchase : true,
            reviews: [
                {
                name:"Riki",
                details:"Nice product",
                stars:5}
            ]
            },

            {name : "Diamond2",
            price : 50,
            description : "Pure black diamond",
            canPurchase : true},

            {name : "Diamond3",
            price : 100000,
            description : "Nihilistic diamond",
            canPurchase : false},
            ];
}]);

appname.controller('panelSelecter', function(){
        this.tab = 1;

        this.selectTab = function(newTab){
            this.tab=newTab;
        };

        this.isSelected = function(Tab){
            return Tab === this.tab;
        };

});
console.log("hahaha");
