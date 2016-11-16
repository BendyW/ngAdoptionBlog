angular.module('adoptionBlog')
.controller('PostsCtrl', function ($scope, $http) {

    $scope.posts = [];

    $scope.fetch = function () {
        $http.get('http://localhost:9292/api/blog').success(function (results){
           $scope.posts = results;
        }).error(function (err) {
            console.log("Fetch failed, it didnt happen")
            console.log(err);
        });
    }

    $scope.fetch();
});