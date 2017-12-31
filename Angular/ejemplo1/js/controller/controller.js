
/*
* Se encarga de interacutar con la vista
*/
angular.module('myApp').controller('myController',[ '$scope','PersonService', function( $scope, PersonService, $q ) {
	var self = this;		
	self.person = { firstName:'', secundName:'', firstApp:'', secundApp:'' };

	self.submit=submit;	

	function submit() {					
		$scope.respuesta = PersonService.person( self.person );		
	}
	/// ejemplo promesa no funciona
	// this.p = function(num) {
	// 	var deferred = $q.defer();
	// 	if(angular.isNumber(num)) {
	// 		deferred.resolve(num+1);
	// 	} else {
	// 		deferred.reject('NaN');
	// 	}
	// 	return deferred.promise;
	// }

	// $scope.myValue = 0;
	// this.pr = p($scope.myValue);
	// this.pr.then(function(v){return $scope.addOne(v)})
	// .then(
	// 	function(v){$scope.myValue=v},
	// 	function(err){$scope.myValue=err}
	// 	)



}]); //End controller