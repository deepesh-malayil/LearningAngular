(function () {
    var app = angular.module("productManagement", ["commonServices", "ui.router", "productResourceMock"]);

    app.config(["$stateProvider", "$urlRouterProvider", function ($stateProvider, $urlRouterProvider) {

        //$urlRouterProvider.otherwise("/products");

        $stateProvider

            .state({
                name: "home",
                url: "/",
                templateUrl: "app/welcome.html",
            })

            .state({
                name: "productList",
                url: "/products",
                templateUrl: "app/products/productlistview.html",
                controller: "ProductListController as model"
            })

            .state({
                name: "productDetail",
                url: "/products/:productId",
                templateUrl: "app/products/productdetailview.html",
                controller: "ProductDetailController as model",
                resolve: {
                    productResource: "productResource",

                    product: function (productResource, $stateParams) {
                        var productId = $stateParams.productId;
                        return productResource.get({ productId: productId }).$promise;
                    }
                }
            })

            .state({
                name: "productEdit",
                abstract: true,
                url: "/products/edit/:productId",
                templateUrl: "app/products/producteditview.html",
                controller: "ProductEditController as model",
                resolve: {
                    productResource: "productResource",

                    product: function (productResource, $stateParams) {
                        var productId = $stateParams.productId;
                        return productResource.get({ productId: productId }).$promise;
                    }
                }
            })

            .state({
                name: "productEdit.info",
                url: "/info",
                templateUrl: "app/products/producteditinfoview.html",
            })

            .state({
                name: "productEdit.price",
                url: "/price",
                templateUrl: "app/products/producteditpriceview.html",
            })

            .state({
                name: "productEdit.tags",
                url: "/tags",
                templateUrl: "app/products/productedittagsview.html",
            });

    }]);
}());