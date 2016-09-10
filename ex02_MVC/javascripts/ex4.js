/**
 * Created by xicunhan on 10/09/2016.
 */
function CommonController($scope){
    $scope.commonFn = function(){
        alert("Fonction en commem");
    };
}

function Controller1($scope){
    $scope.greeting={
        text:'Hello1'
    };
    $scope.test1=function(){
        alert('test1');
    };
}

function Controller2($scope){
    $scope.greeting={
        text:'Hello2'
    };
    $scope.test2=function(){
        alert("test2");
    };
}

