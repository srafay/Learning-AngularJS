(function() {

    var appname = angular.module('store-products', []);

    appname.controller('items', ['$http', function($http){
        this.products = [];
        var store = this;
        $http.get('store-products.json').success(function(data){
            store.products = data;
            console.log("loading produts.json");
            console.log(data);
        });
    }]);

})();
