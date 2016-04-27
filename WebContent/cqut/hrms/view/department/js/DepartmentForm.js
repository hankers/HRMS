angular.module('departmentModule', [])
.controller('departmentFormController',['$rootScope','$scope','$state','$stateParams','DepartmentService','OrganizationService',
          
    function($rootScope,$scope,$state,$stateParams,DepartmentService,OrganizationService){
	
	
	  $scope.selectItem=function(){
		alert($scope.department.organizationId);
	  }
	   //加载全部组织机构
	     OrganizationService.getOrganizations(sucesscb,errorcb);
		 
		 function sucesscb(data)
			{
			    //alert(data);
			    $scope.organization=data;
			    
				console.log($scope.organization);
				//$state.go('main.list.organization.list');
			}
			function errorcb()
			{
				alert('获取机构列表失败!');
			}	
    $scope.showSaveAndAddButton = $stateParams.operate == 'add' ?true:false;
	
	$scope.operate = $stateParams.operate;
	
	$scope.saveDepartment = function(department){
		if($scope.operate=='add')
		{
		  $scope.addDepartment(department);
		  
		}else if($scope.operate=='edit'){
			
			$scope.updateDepartment(department);
		}
	}
	
	$scope.addDepartment=function(department){
		DepartmentService.insertDepartment(department,sucesscb,errorcb);
		function sucesscb(data)
		{
			console.log(data);
			$state.go('main.list.department.list');
		}
		function errorcb()
		{
			alert('添加失败!');
		}
	}
}]);