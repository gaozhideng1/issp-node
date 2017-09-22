var app = angular.module('recordGroup', ['toastr']);
app.controller('recordGroupCtrl', function($scope, recordSer,toastr){
$scope.months=['1','2','3','4','5','6','7','8','9','10','11','12']
    $scope.showed=true;
    // 项目组
    recordSer.projectGroups().then(function(response){
        if(response.data.code == 0){
            $scope.projectGroups = response.data.data;

        }
    });
    $scope.collect = function(){
        var data = $scope;
        data.sum={
            year:data.year,
            month:data.month,
            group:data.group
        };
        recordSer.moneyGroup(data.sum).then(function(response){
            if(response.data.code == 0){
                if( data.sum.year == undefined || data.sum.year == '' || data.sum.month == undefined || data.sum.month == ''){
                    $scope.showed=true
                }else {
                    $scope.showed=false
                }
                $scope.recordLists = response.data.data;
            }else{
                toastr.error( response.data.msg, '温馨提示');
            }
        })
    };

});




