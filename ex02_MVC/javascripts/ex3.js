/**
 * Created by xicunhan on 10/09/2016.
 */

var myModule = angular.module("MyModule",[]);
myModule.directive("hello",function(){
    return{
        restrict: 'E',
        template: '<div>Hi everyone!</div>',
        replace: true
    }
});
