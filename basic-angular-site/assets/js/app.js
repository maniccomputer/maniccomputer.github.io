(function () {
    var app = angular.module('cubsTeam', ['player-directives']);

    app.controller('TeamController', ['$http', function ($http) {
        //this.players = roster;

        var team = this;
        team.players = [];
        $http.get('shared/players/players.json').success(function (data) {
            team.players = data;
        });
    }]);

    app.controller('PanelController', function () {
        this.tab = 1;

        this.selectTab = function (setTab) {
            this.tab = setTab;
        };

        this.isSelected = function (checkTab) {
            return this.tab === checkTab;
        };
    });

    

})();