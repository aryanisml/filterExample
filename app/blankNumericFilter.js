angular.module('myapp')
.filter('blanknumeric', function () {
    return function (input) {
        console.log(input);
        var out = "";
        if (isNaN(input)) {
            out = input;
        } else {
            out = "";
        };
        return out;

    }
})