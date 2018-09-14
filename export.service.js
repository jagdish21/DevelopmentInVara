(function(){
	'use strict';
angular.module('admin').factory("ExportSvc",ExportSvc);
 function ExportSvc($http, $q,$httpParamSerializer,$rootScope){
    var path = '/api/path';

    function exportExcel(filter){
      var url = path + "/render.xlsx";
      var qs;
      if(Object.keys(filter).length){
        qs = $httpParamSerializer(filter);
      }
      if(qs)
        url += '?' + qs;
       return $http.get(url)
          .then(function(res){
            saveAs(new Blob([s2ab(res.data)], {
              type: "application/octet-stream"
            }), filter.type + new Date().getTime() + ".csv")
          })
          .catch(function(err){
            throw err;
          });
    }
      return services;
  } 
})();

