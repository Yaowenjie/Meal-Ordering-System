/**
 * Created by admin on 2015/1/17.
 */
var app = angular.module("app",[]);

app.controller("TestController",['$scope', function($scope){
    $scope.res =[
        {name:"XX糕点"},
        {name:"仓桥家"},
        {name:"肯德基"},
        {name:"麦当劳"}
    ];
    $scope.items = [
        {name: '多彩小包', price: 10.50, amount:0, img:"img/f1.jpg" },
        {name: '甜蜜点心', price: 12.80, amount:0, img:"img/f2.jpg" },
        {name: '她的微笑', price: 13.40, amount:0, img:"img/f3.jpg" },
        {name: '樱桃糕点', price: 15.60, amount:0, img:"img/f4.jpg" },
        {name: '水果蛋糕', price: 12.50, amount:0, img:"img/f5.jpg" },
        {name: '曲奇饼干', price: 15.90, amount:0, img:"img/f6.jpg" },
        {name: '巧克力蛋糕', price: 18.80, amount:0, img:"img/f7.jpg" },
        {name: '水果蛋糕', price: 13.50, amount:0, img:"img/f8.jpg" },
        {name: '切片巧克力', price: 11.50, amount:0, img:"img/f9.jpg" },
    ];
    $scope.go_to_list = function(){
        j=0;
        for(var i=0; i<$scope.items.length; i++)
        {
            if($scope.items[i].amount!==0)
            {
                console.log($scope.items[i].name);
                console.log($scope.items[i].price);
                console.log($scope.items[i].amount);
            }
        }
    };
    $scope.addtolist = function(index){
        $scope.items[index].amount++;
    };
    $scope.subfromlist = function(index){
        $scope.items[index].amount--;
        if($scope.items[index].amount<=0) $scope.items[index].amount=0;
    };
}]);


//app.config(['$routeProvider',function ($routeProvider){
//    $routeProvider
//        .when('/', {
//            controller: 'TestController',
//            templateUrl: 'FoodList.html'
//        })
//        .when('/ensure', {
//            controller: 'TestController',
//            templateUrl: 'OrderedList.html'
//        })
//        .otherwise({
//            redirectTo: '/'
//        });
//    }
//]);



