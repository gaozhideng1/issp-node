var app = angular.module('infoServer',[]);
app.factory('infoSer',function ($http) {
    return {
        infoList : infoList,
        searchList : searchList,
        addInfo:addInfo,
        editInfo:editInfo,
        findInfoId:findInfoId,
        countInfo:countInfo,
        deleteInfo:deleteInfo,
        summaryInfo:summaryInfo,
        getCity:getCity,
        infoListFile:infoListFile,
        websiteUrl:websiteUrl,
        websiteName:websiteName,
        getProjectName:getProjectName,
        infoGuide:infoGuide,
        infoFiles:infoFiles,//文件附件列表
        getbiddingType:getbiddingType,
        getYear:getYear,
        getcaigouInfo:getcaigouInfo,
        getyidongInfo:getyidongInfo,
        getzycgInfo:getzycgInfo,
        gettxzbInfo:gettxzbInfo,
        gettoobiaoInfo:gettoobiaoInfo,
        getcaigouTotal:getcaigouTotal,
        getyidongTotal:getyidongTotal,
        getzycgTotal:getzycgTotal,
        gettxzbTotal:gettxzbTotal,
        gettoobiaoTotal:gettoobiaoTotal,

    };
    function infoList(data) {
        return $http.get('/biddinginfo/list',{
            params: data

        })
    }

    function getcaigouInfo(data) {
        return $http.get('/biddinginfo/caigouInfo',{
            params: data

        })
    }
    // 中国警务招标网总条数(每页20条)
    function getcaigouTotal(data){
        return $http.get('/biddinginfo/caigouTotal',{params:data})
    }
    function getyidongInfo(data) {
        return $http.post('/biddinginfo/yidonginfo',{
            params: data

        })
    }
    中国移动采购与招标网总条数(每页20条)
    function getyidongTotal(data){
        return $http.post('/biddinginfo/yidongTotal',{params:data})
    }
    function getzycgInfo(data) {
        return $http.get('/biddinginfo/zycgInfo',{
            params: data

        })
    }
    中央政府采购网总条数(每页20条)
    function getzycgTotal(data){
        return $http.get('/biddinginfo/zycgTotal',{params:data})
    }
    function gettxzbInfo(data) {
        return $http.post('/biddinginfo/txzbInfo',{
            params: data

        })
    }
    工信部招标网总条数(每页11条)
    function gettxzbTotal(data){
        return $http.post('/biddinginfo/txzbTotal',{params:data})
    }

    function gettoobiaoInfo(data) {
        return $http.get('/biddinginfo/toobiaoInfo',{
            params: data

        })
    }
    中国电力工程招标网总条数(每页23条)
    function gettoobiaoTotal(data){
        return $http.get('/biddinginfo/toobiaoTotal',{params:data})
    }

    //搜索
    function searchList(data) {
        return $http.get('/biddinginfo/search',{
            params: data

        })
    }

    //添加
    function addInfo(data){
        return $http.post('/biddinginfo/add',data)
    }
    //编辑
    function editInfo(data){
        return $http.post('/biddinginfo/edit',data)
    }
    //id查询
    function findInfoId(data){
        return $http.get('/biddinginfo/info',{
            params:data
        })
    }
    //分页总条数
    function countInfo(data){
        return $http.get('/biddinginfo/count',{params:data})
    }
    //删除
    function deleteInfo(data){
        return $http.get('/biddinginfo/delete',{
            params: data

        })
    }
    //汇总
    // function summaryInfo(data) {
    //     return $http.get('/biddinginfo/collect?cities='+data.join(','))
    // }
    function summaryInfo(data) {
        return $http.get('/biddinginfo/collect?cities='+data)
    }
    //获取所有地区
    function getCity(){
        return $http.get('/biddinginfo/cities')
    }
    //----------------------------------------------------------
    //功能导航权限
    function infoGuide(data){
        return $http.get('/infoGuide/guide/'+data)
    }
    //文件附件列表
    function infoListFile(data){
        return $http.get('/infoListFile/listFile',{params:data})
    }
    //上传附件
    function infoUploadFile(data){
        return $http.post('/infoUploadFile/uploadFile',data)
    }
    //导出
    function infoExport(data){
        return $http.get('/infoExport/export',{params:data})
    }
    //文件下载
    function infoDownloadFile(data){
        return $http.get('/infoDownloadFile/downloadFile',{params:data})
    }
    //删除文件或文件夹
    function infoDeleteFile(data){
        return $http.post('/infoDeleteFile/deleteFile',data)
    }
    //获取网址
    function websiteUrl(data){

        return $http.get('/websiteUrl/url',{
            params: data

        })
    }
    //获取招投标类型
    function getbiddingType(data){

        return $http.get('/biddinginfo/getType',{
            params: data

        })
    }
    //获取年份
    function getYear(data){

        return $http.get('/biddinginfo/getYear',{
            params: data

        })
    }
    //获取网站名称
    function websiteName(data){

        return $http.get('/websiteName/name',{
            params: data

        })
    }
    //获取所有项目名称
    function getProjectName(){
        return $http.get('/getProjectName/projectName')
    }
    //文件附件列表
    function infoFiles(data) {
        return $http.get('/infoFiles/files',{
            params:data
        })
    }
});
