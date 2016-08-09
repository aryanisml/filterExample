(function () {
    'use strict';

    angular.module('myapp', [])
    .controller('myController', funcmyController);

    funcmyController.$inject = ['$filter'];
    function funcmyController($filter) {

        var vm = this;
        vm.myData = "Swapnil";
        console.log(vm.myData);
        vm.productItem = ['H122', 'JOK121', '12', 'HH'];
        vm.newProductItem = vm.productItem;
        vm.newArray = [];
        vm.newProductItem.forEach(function (val) {
            var x = $filter('blanknumeric')(val);
            vm.newArray.push(x);
        })
        vm.newProductItem = vm.newArray;
        
    }
       
})();