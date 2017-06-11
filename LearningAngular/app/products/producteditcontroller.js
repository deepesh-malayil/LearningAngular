(function () {

    angular
        .module("productManagement")
        .controller("ProductEditController", ["product", "$state", productEditController]);

    function productEditController(product, $state) {
        var model = this;

        model.product = product;

        if (model.product && model.product.productId) {
            model.title = "Edit: " + model.product.productName;
        }
        else {
            model.title = "New Product";
        }

        model.submit = function () {
            model.product.$save();
        }

        model.cancel = function () {
            $state.go("productList");
        }
    }



}());