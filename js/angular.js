
app = angular.module('myApp', []);
 app.controller('cntr', function($scope, $http) {
     app.config(function($httpProvider) {
      //Enable cross domain calls
      $httpProvider.defaults.useXDomain = true;

      //Remove the header used to identify ajax call  that would prevent CORS from working
//      delete $httpProvider.defaults.headers.common['X-Requested-With'];
  });
    $http({
        method : "GET",
        url : "http://ec2-13-126-231-175.ap-south-1.compute.amazonaws.com:8080/pc/dummyList",
         headers: {
                    'Content-Type': 'application/json; charset=utf-8'
        }
    }).then(function mySuccess(response) {
        $scope.datas = response.data;
        // var datass= $scope.datas;
        $scope.showDetails=function(amar)
        {	
        		$scope.txt=amar;	
        		// console.log(amar);
        }
    }, function myError(response) {
        $scope.myWelcome = response.statusText;
    });
});
