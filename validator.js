var validation = angular.module('validation', []);

// Angular Controller
validation.controller('mainController', function($scope) {

	// function to submit the form after all validation has occurred
	$scope.user={};
	$scope.visible=true;
	$scope.alerts=false;

	$scope.checkForm=function(user){

		var control=0;

		if(user.nombre==""||user.nombre==null){			
			addErrorClass("nombre");
			control++;
		}

		if(user.apellido==""||user.apellido==null){
			addErrorClass("apellido");
			control++;
		}
		if(user.email==""||user.email==null){
			addErrorClass("email");
			control++;
		}			

		if(control==0){
			$scope.visible=true;
			$scope.alerts=true;	
			
		}
		else{
			$scope.visible=false;
			$scope.alerts=true;			
		}
	}	

	$scope.resetForm=function()
	{
		$scope.alerts=false;
		$("#nombre").removeClass("error_vacio");
		$("#apellido").removeClass("error_vacio");
		$("#email").removeClass("error_vacio");

	}

	$scope.checkEmail=function (email) {
		//alert(email);
		var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
		return re.test(email);
	}

	function addErrorClass(id){
		$("#"+id).addClass("error_vacio");
	}	
});