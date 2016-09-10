/**
 * Created by xicunhan on 10/09/2016.
 */

function GreetCtrl($scope, $rootScope){
    $scope.name = "World";
    $rootScope.department = 'Angular';
}

function ListCtrl($scope){
    $scope.name = ['Igor', 'Misko', 'Vojta'];
}


