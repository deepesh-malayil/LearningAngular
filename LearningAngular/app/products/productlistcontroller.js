(function () {

    angular
        .module("productManagement")
        .controller("ProductListController", ["productResource", ProductList]);

    function ProductList(productResource) {

        var model = this;

        productResource.query(function (data) {
            model.products = data;
        });

        model.showImage = false;

        model.toggleImage = function () {
            model.showImage = !model.showImage;
        }
    }

}());