(function () {

    angular
        .module("productManagement")
        .controller("ProductEditController", ["product", productEditController]);

    function productEditController(product) {
        var model = this;

        model.product = product;

        if (model.product && model.product.productId) {
            model.title = "Edit: " + model.product.productName;
        }
        else {
            model.title = "New Product";
        }
    }



}());