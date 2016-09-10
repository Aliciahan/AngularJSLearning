/**
 * Created by xicunhan on 10/09/2016.
 */
function EventController($scope){
    $scope.count=0;
    $scope.$on('MyEvent', function(){
        $scope.count++;
    });
}