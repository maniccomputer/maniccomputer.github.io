(function () {
    var app = angular.module('player-directives', []);


    app.directive('mcAddPlayer', function () {
        return {
            restrict: 'E',
            templateUrl: 'components/forms/addPlayer.html',
            controller: function () {
                this.newPlayer = {};
                this.addPlayer = function (players) {
                    players.push(this.newPlayer);
                    this.newPlayer = {};
                };
            },
            controllerAs: 'addPlayerCtrl'
        };
    });
})();