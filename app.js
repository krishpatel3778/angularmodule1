(function (){
  "use strict";
  angular.module("Item",[])
  .controller("LunchCheckController",lunchCheckController);
  lunchCheckController.$inject=["$scope"];
  function lunchCheckController($scope){
    $scope.items="";
    $scope.output="";
    $scope.outputColor="none";
    $scope.enterChecker=function(event){
      if(event.which===13){
        $scope.checker();
      }
    }
    $scope.checker=function(){
      var array=$scope.items.split(",");
      var lengt=array.length;
      var count=0;
      for(var i=0;i<lengt;i++){
        if(array[i].trim()!=""){
          count++;
        }
      }
      $scope.setter(count,lengt);
    }
    $scope.setter=function(count,lengt){
      if(count<4&&count>0){
        $scope.output="Enjoy!";
      }else if(count==0&&lengt==1){
          $scope.output="Please enter a value first!";
      }else if(count==0&&lengt!=1){
        $scope.output="Your input cotaines no items!";
      }else{
        $scope.output="Too much!";
      }
        $scope.setColor();
    }
      $scope.setColor= function(){
        if($scope.output=="Enjoy!"||$scope.output=="Too much!"){
            $scope.outputColor="green";
        }else{
            $scope.outputColor="red";
        }
      }
  }


})();
