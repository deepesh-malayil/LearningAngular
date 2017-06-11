(function () {

    angular
        .module("productManagement")
        .controller("ProductDetailController", ["product", productDetailController]);

    function productDetailController(product) {
        var model = this;

        model.product = product;
        model.title = "Product Detail: " + model.product.productName;

        if (model.product.tags) {
            model.product.tagList = model.product.tags.toString();
        }
    }

}());