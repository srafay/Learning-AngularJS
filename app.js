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
            canPurchase : true,
            reviews: [
                {
                name:"Riki",
                details:"Nice product",
                stars:5}
            ]
            },

            {name : "Diamond3",
            price : 100000,
            description : "Nihilistic diamond",
            canPurchase : false,
            reviews: [
                {
                name:"Riki",
                details:"Nice product",
                stars:5}
            ]
            },
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

appname.controller('ReviewController', function(){
    this.review={};
    this.addReview = function(product){
        product.reviews.push(this.review);

    };
});

console.log("hahaha");
