var app = angular.module("UserService", []);

app.service("searchService", function ($http, $q)
{
    var deferred = $q.defer();
    $http.get("json/instructions.json").then(function (data)
    {
        deferred.resolve(data);
    });

    this.getDish = function ()
    {
        return deferred.promise;
    }
})
