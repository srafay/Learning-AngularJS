var appname = angular.module('store', []);
appname.controller('items',function(){
        this.products = [
            {name : "Diamond1",
            price : 45,
            description : "Pure white diamond",
            canPurchase : true,
            reviews: [
                {
                name:"Riki",
                email:"riki@dota2.com",
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
                name:"Alchemist",
                email:"Alc@dota2.com",
                details:"Diamond2 was shiny",
                stars:4}
            ]
            },

            {name : "Diamond3",
            price : 100000,
            description : "Nihilistic diamond",
            canPurchase : false,
            reviews: [
                {
                name:"Anti-Mage",
                email:"am@dota2.com",
                details:"Need more blinking product",
                stars:2}
            ]
            },
            ];
});

appname.controller('panelSelecter', function(){
        this.tab = 1;

        this.selectTab = function(newTab){
            this.tab=newTab;
        };

        this.isSelected = function(Tab){
            return Tab === this.tab;
        };

});

appname.directive('formProperties', function(){
    return {
        restrict: 'A',
        templateUrl: 'form-properties.html'
    };
});

appname.directive('reviewForm', function(){
    return {
        restrict: 'E',
        templateUrl: 'review-form.html'
    };
});

appname.directive('liveReviewFormPreview', function(){
    return {
        restrict: 'E',
        templateUrl: 'live-review-form-preview.html',
        controller: function(){
            this.review={};
            this.addReview = function(product){
                console.log("addReview() called");
                console.log(product[0].reviews);
                product[0].reviews.push(this.review);
                this.review={};

            };
        },
        controllerAs: 'reviewCtrl'
    };
});

console.log("hahaha");
