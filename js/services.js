// angular
//   .module("RegResApp.services", [])
//   .factory("regresAPIservice", function ($http) {
//     return {
//       users: function () {
//         return $http
//           .get("https://reqres.in/api/users?page=2")
//           .then(function (response) {
//             return response.data;
//           });
//       },
//     };
//   });



//   angular
//   .module("RegResApp.services", [])
//   .factory("regresAPIservice", regresAPIservice);


//   function regresAPIservice ($http) {
//       return{
//         users: function (){
//             return $http
//           .get("https://reqres.in/api/users?page=2")
//           .then(function (response) {
//             return response.data;
//           });
//         }
//       }
//   }
  

 
//   angular
//   .module("RegResApp.services", [])
//   .factory("regresAPIservice", regresAPIservice);

//   regresAPIservice.$inject = ['$http'];

//   function regresAPIservice($http) {
//     return {
//         users: users
//     };

//     function users(){
//         return $http
//         .get("https://reqres.in/api/users?page=2")
//         .then(function (response) {
//           return response.data;
//         });  
//     }
//   }



  angular
  .module("RegResApp.services", [])
  .factory("regresAPIservice", regresAPIservice);

  regresAPIservice.$inject = ['$http'];

  function regresAPIservice($http) {
    return {
        users: users
    };

    function users(){
        return $http.get("https://reqres.in/api/users?page=2")
                    .then(getUsersComplete)
                    .catch(getUsersFailed); 
    }

    function getUsersComplete(response) {
        return response.data;
    }
    function getUsersFailed(error) {
        logger.error('XHR Failed for getAvengers.' + error.data);
    }


  }


 