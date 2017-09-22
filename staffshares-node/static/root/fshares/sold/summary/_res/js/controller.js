var app = angular.module('soldSummary', ['toastr']);
app.controller('soldSummaryCtrl', function($scope, soldSer,toastr){
    $scope.showed=true;
    $scope.collect = function(){
        var vm = $scope;
        //  var start =  angular.element('.startTime').val();
        //  var end =  angular.element('.endTime').val();
        // vm.sum={
        //     area:vm.area,
        //     project:vm.project
        // };
        // vm.sum.start=start;
        // vm.sum.end=end;
        soldSer.soldSummary(vm.sum).then(function(response){
            if(response.data.code == 0){
                $scope.punishmentLists = response.data.data;
            }else{
                toastr.error(response.data.msg,'温馨提示');
            }
        })
    };
});





