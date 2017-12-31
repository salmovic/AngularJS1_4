'use strict';
/*
* Se encarga de enviar las peticiones a BE
*  [nombre Servicio, [$http, promise]]
*/ 
angular.module('myApp').factory('PersonService',['$http','$q', function($http,$q){	
	// ruta de servicio
	var REST_SERVICE_URI = 'http://10.10.10.18:8070/Nivel2/user/';

	var factory = {
		person: person
	}
	// retornamos factores de servicio
	return factory;

	// funciones
	function person( dtsPerson ) {
		//var deferred = $q.defer();
		// envio post
		/*
		$http.post( REST_SERVICE_URI, dtsPerson ).then(			
			function( resp ) {
				// sussecfull
				deferred.resolve( resp );
			},
			function( errResp ) {
				// error
				deferred.reject( errResp );
			}
		);
		return deferred.promise;
		*/
		console.log(dtsPerson);
		return dtsPerson;
	}
	

}]);