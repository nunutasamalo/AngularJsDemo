// angular.module('RegResApp.controllers', []).
// controller('usersController', function($scope,regresAPIservice) {
//     regresAPIservice.users()
//     .then(function(data){
//         $scope.users = data;
//        });
//   });



angular.module('RegResApp.controllers', []).
controller('usersController', usersController);

function usersController($scope, regresAPIservice) {
    regresAPIservice.users()
        .then(function (data) {
            $scope.users = data;
        });
}



// angular.module('RegResApp.controllers', []).
// controller('usersController', usersController);

// usersController.$inject = ['regresAPIservice'];
// function usersController(regresAPIservice) {
//     var vm = this;
//     vm.users = [];
//     getusers();

//     function getusers() {
//         return regresAPIservice.users()
//             .then(function (data) {
//                 vm.users = data;
//                 return vm.users;
//             });
//     }
// }