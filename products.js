(function() {

    var appname = angular.module('store-products', []);

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

})();
