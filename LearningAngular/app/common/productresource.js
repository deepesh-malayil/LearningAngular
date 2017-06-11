(function () {

    angular
        .module("commonServices")
        .factory("productResource", ["$resource", productResource]);

    function productResource($resource) {
        return $resource("/api/products/:productId");
    }

}());