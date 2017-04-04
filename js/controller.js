angular.module('RouteControllers', [])
    .controller('HomeController', function($scope)
    {
        $scope.title = "Home";
    })

    .controller('SearchController', function($scope, searchService)
    {
        var promise = searchService.getDish();
        promise.then(function (data)
        {
            $scope.cooking_instructions = data;
            console.log($scope.cooking_instructions);
        });
    })
