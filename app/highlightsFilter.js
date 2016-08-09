angular.module('myapp')
.filter('highlights', function () {
    return function (input) {
        var out = "";
        if (input.indexOf('H') > -1 || input.indexOf('h') > -1) {
            out = "T";
        } else { out = "F" };
        return out;

    }
})