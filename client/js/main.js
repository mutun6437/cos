var myApp = angular.module('app',[]);
myApp.controller('itemCtrl', ['$scope', function($scope) {
    $scope.items = [
    	{title:"A",src:"https://pbs.twimg.com/profile_images/378800000856417293/egC6Szc2_400x400.jpeg",userName:"○○さん"},
    	{title:"A",src:"http://akibacluster.com/wp/wp-content/uploads/2015/01/DSC0703058.jpg",userName:"○○さん"},
    	{title:"A",src:"http://www3.tky.3web.ne.jp/~wspcojp/image17.jpg",userName:"○○さん"},
    	{title:"A",src:"http://www.famitsu.com/images/000/077/579/553c9f4621e07.jpg",userName:"○○さん"},
    	{title:"A",src:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQM4lC5zr9PSRVePb0bsM6qVsJLAsbsJnPJOddK3McA-P0-GLxZ",userName:"○○さん"},
    	{title:"A",src:"https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcT3r6rRe4K26FpZw8Vf37Utk3O9ZMv-R-OFo3GUZjLF_4MepJkR",userName:"○○さん"},
    	{title:"A",src:"http://akibacluster.com/wp/wp-content/uploads/2015/01/DSC0703058.jpg",userName:"○○さん"},
    	{title:"A",src:"http://www.famitsu.com/images/000/077/579/553c9f4621e07.jpg",userName:"○○さん"},
    	{title:"A",src:"https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcT3r6rRe4K26FpZw8Vf37Utk3O9ZMv-R-OFo3GUZjLF_4MepJkR",userName:"○○さん"},
    	{title:"A",src:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQM4lC5zr9PSRVePb0bsM6qVsJLAsbsJnPJOddK3McA-P0-GLxZ",userName:"○○さん"},
    	{title:"A",src:"https://pbs.twimg.com/profile_images/378800000856417293/egC6Szc2_400x400.jpeg",userName:"○○さん"},
        {title:"A",src:"https://pbs.twimg.com/profile_images/378800000856417293/egC6Szc2_400x400.jpeg",userName:"○○さん"}
    	];

    /***************************************************/
    //                     初期化
    /***************************************************/
    //$scope.selectedSearchOption = "ランダム";



//TODO 未完成
    //検索処理ボタン
    $scope.searchAnimate = "";
    $scope.searchButton = function(state){
        console.log("状態変化"+state);
        //TODO 初めに初期化する
        if(state === "search"){
            $scope.searchAnimate = "animated fadeOutUp";
            setTimeout(function(){$('#searchButton').removeClass('animated fadeOutUp');$scope.searchAnimate ="";},3000);
        }else if(state==="searched"){
            $scope.searchAnimate = "animated fadeInUp";
            setTimeout(function(){$('#searchButton').removeClass('animated fadeInUp');$scope.searchAnimate ="";},3000);
        }else if(state==="request"){
            $scope.searchAnimate = "animated rubberBand";
            setTimeout(function(){$('#searchButton').removeClass('animated rubberBand');$scope.searchAnimate ="";},3000);
        }        
    }


}]);


myApp.directive('afterRenderRepeat', function() {
  return function(scope, element, attrs) {
    if (scope.$last){
        $(document).foundation();
    }
 };
})