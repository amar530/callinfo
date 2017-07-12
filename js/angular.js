// var cors=new enableCorsAttribute("*","*","*");
// config.EnableCors(cors);

var app = angular.module('myApp', []);
app.controller('cntr', function($scope, $http) {
    $http({
        method : "GET",
        url : "http://ec2-13-126-231-175.ap-south-1.compute.amazonaws.com:8080/pc/dummyList"
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
var cors=new enableCorsAttribute("*","*","*");
config.EnableCors(cors);