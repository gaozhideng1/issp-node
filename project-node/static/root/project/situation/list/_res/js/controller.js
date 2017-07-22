var app = angular.module('situationList', ['ng-pagination','toastr']);
app.controller('situationListCtrl',function($scope,situationSer,toastr,$location,$stateParams,$state) {
    $scope.$emit('changeId', null);
    $scope.$on('iSsearch',function(event,newIs){
        $scope.isView = newIs;
    });
    $scope.cancel = function(){//取消删除
        $scope.delShow = false;
        $state.go('root.project.situation.list[12]',{id:null,name:null});
    };
    //获取id
    if($stateParams.id){
        switch ($stateParams.name){
            case 'delete':
                $scope.delShow = true;
                break;
        }
    }
    var count = 0;
    $scope.delFn = function(){//确认删除
        var data = {
            id:$stateParams.id
        };
        situationSer.deleteProjectSit(data).then(function(response){
            if(response.data.code==0){
                count++;
                toastr.info( "信息已删除", '温馨提示');
                $scope.$emit('changeId', null);
                $scope.delShow = false;
                if(($scope.abili.itemsCount-count)%10){
                    $state.go('root.project.situation.list[12]',{id:null,name:null});
                }else{
                    $state.go('root.project.situation.list[12]',{id:null,name:null,page:$stateParams.page-1});
                }
            }else{
                toastr.error( response.data.msg, '温馨提示');
            }
        });
    };

   //选择
    $scope.selectList = function(event){
        angular.forEach($scope.situationLists.data,function(obj){
            obj._selectList = false
        });
        event._selectList = true;
        $scope.idList = event.id;
        //向父Ctrl传递事件
        $scope.$emit('changeId', $scope.idList);
        $scope.$emit('page', $location.search().page);
    };
    //查看更多
    $scope.moreList = function(event){
        angular.forEach($scope.situationLists.data,function(obj){
            if(event.id!==obj.id){
                obj._moreList = false
            }
        });
        event._moreList = !event._moreList;
    };
    $scope.enginPlace = $stateParams.enginPlace?$stateParams.enginPlace:'';
    $scope.completeCondition = $stateParams.completeCondition?$stateParams.completeCondition:'';
    if($stateParams.enginPlace || $stateParams.completeCondition){
        $scope.$emit('isId', false);
        $scope.isView = false;
    }else{
        $scope.$emit('isId', true);
    }
    $scope.search = function(){
        $state.go('root.project.situation.list[12]',{enginPlace:$scope.enginPlace,completeCondition:$scope.completeCondition,page:1});
    };
    function activatePage(page) {
        var listData = {
            page:page||1,
            enginPlace:$scope.enginPlace || "",
            completeCondition:$scope.completeCondition || "",
        };
        situationSer.countProjectBaseInfo(listData).then(function(response){
            if(response.data.code==0){
                $scope.abili.itemsCount = response.data.data;
                $scope.num = $stateParams.page*10>10?($stateParams.page-1)*10:null;
            }else{
                toastr.error(response.data.msg, '温馨提示');
            }
        });
        situationSer.listProjectSituationCap(listData).then(function(response){
            if(response.data.code==0){
                $scope.situationLists = response.data;
                if ($stateParams.id) {
                    if ($stateParams.id.indexOf('&')) {
                        $stateParams.id = $stateParams.id.split('&')[0];
                    }
                    angular.forEach($scope.situationLists.data, function (obj) {
                        if (obj.id == $stateParams.id.split('&')[0]) {
                            obj._selectList = true;
                        }
                    });
                    //向父Ctrl传递事件
                    $scope.$emit('changeId', $stateParams.id);
                }
            }else{
                toastr.error(response.data.msg, '温馨提示');
            }
        });
    }
    $scope.abili = {
        itemsCount: 2, //总条数
        take: 10, //每页显示
        activatePage: activatePage
    };
    $scope.titles = ["工程地点","完工情况"];
});
