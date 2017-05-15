var app = angular.module('costEdit', ['toastr']);
app.controller('costEditCtrl', function($scope, costSer,$stateParams,$state,toastr){
    costSer.allCostProjects().then(function(response){
        if(response.data.code == 0){
            $scope.proData = response.data.data;
        }
    });
    var costData ={id: $stateParams.id};
    //获取ID
    costSer.findCostdId(costData).then(function(response){
        if(response.data.code=='0'){
            $scope.editInfo = response.data.data;
        }else if (response.data.code==403){
            toastr.error( "请登录用户", '温馨提示');
        }

    });
    //编辑点击提交
    $scope.costEditFun = function(){
        var vm = $scope;
        costSer.editCost(vm.editInfo).then(function(response){
            if(response.data.code == 0){
                $state.go('root.assessment.cost.list');
                toastr.success( "编辑成功", '温馨提示');
            }else if(response.data.code == 403){
                toastr.error( "请登录用户", '温馨提示');
            }
        });
    };
});





