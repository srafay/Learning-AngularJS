var appname = angular.module('store', ['store-products']);

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

appname.directive('navBar', function(){
    return {
        restrict: 'E',
        templateUrl: 'nav-bar.html'
    };
});

console.log("hahaha");
