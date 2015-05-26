﻿(function () {
    var app = angular.module('cubsTeam', []);

    app.controller('TeamController', function () {
        this.players = roster;
    });

    app.controller('PanelController', function () {
        this.tab = 1;

        this.selectTab = function (setTab) {
            this.tab = setTab;
        };

        this.isSelected = function (checkTab) {
            return this.tab === checkTab;
        };
    });

    

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

    var roster = [{
        firstName: "Anthony",
        lastName: "Rizzo",
        position: "1B",
        fieldPosition: "Infielders",
        number: 44,
        todaysLineup: true,
        lineupOrder: 3,
        inactive: false,
        images: [{
            profile: "assets/img/aRizzo.png",
            thumb: "assets/img/aRizzo-t.png"
        }],
        hittingStats: [{
            avg: '322',
            obp: '444',
            slg: '586'
        }]
    },
    {
        firstName: "Addison",
        lastName: "Russell",
        position: "2B",
        fieldPosition: "Infielders",
        number: 22,
        todaysLineup: true,
        lineupOrder: 9,
        inactive: false,
        images: [{
            profile: "assets/img/aRussell.png",
            thumb: "assets/img/aRussell-t.png"
        }],
        hittingStats: [{
            avg: '241',
            obp: '293',
            slg: '407'
        }]
    },
    {
        firstName: "Starlin",
        lastName: "Castro",
        position: "SS",
        fieldPosition: "Infielders",
        number: 13,
        todaysLineup: true,
        lineupOrder: 5,
        inactive: false,
        images: [{
            profile: "assets/img/sCastro.png",
            thumb: "assets/img/sCastro-t.png"
        }],
        hittingStats: [{
            avg: '272',
            obp: '302',
            slg: '347'
        }]
    },
    {
        firstName: "Javier",
        lastName: "Baez",
        position: "SS",
        fieldPosition: "Infielders",
        number: 9,
        todaysLineup: false,
        lineupOrder: 0,
        inactive: true,
        images: [{
            profile: "assets/img/jBaez.png",
            thumb: "assets/img/jBaez-t.png"
        }],
        hittingStats: [{
            avg: '169',
            obp: '227',
            slg: '324'
        }]
    },
    {
        firstName: "Kris",
        lastName: "Bryant",
        position: "3B",
        fieldPosition: "Infielders",
        number: 17,
        todaysLineup: true,
        lineupOrder: 4,
        inactive: false,
        images: [{
            profile: "assets/img/kBryant.png",
            thumb: "assets/img/kBryant-t.png"
        }],
        hittingStats: [{
            avg: '273',
            obp: '391',
            slg: '445'
        }]
    },
    {
        firstName: "Miguel",
        lastName: "Montero",
        position: "C",
        fieldPosition: "Catchers",
        number: 47,
        todaysLineup: true,
        lineupOrder: 7,
        inactive: false,
        images: [{
            profile: "assets/img/mMontero.png",
            thumb: "assets/img/mMontero-t.png"
        }],
        hittingStats: [{
            avg: '267',
            obp: '387',
            slg: '455'
        }]
    },
    {
        firstName: "David",
        lastName: "Ross",
        position: "C",
        fieldPosition: "Catchers",
        number: 3,
        todaysLineup: false,
        lineupOrder: 0,
        inactive: false,
        images: [{
            profile: "assets/img/dRoss.png",
            thumb: "assets/img/dRoss-t.png"
        }],
        hittingStats: [{
            avg: '182',
            obp: '341',
            slg: '303'
        }]
    },
    {
        firstName: "Mike",
        lastName: "Baxter",
        position: "LF",
        fieldPosition: "Outfielders",
        number: 29,
        todaysLineup: false,
        lineupOrder: 0,
        inactive: false,
        images: [{
            profile: "assets/img/mBaxter.png",
            thumb: "assets/img/mBaxter-t.png"
        }],
        hittingStats: [{
            avg: '000',
            obp: '200',
            slg: '000'
        }]
    },
    {
        firstName: "Chris",
        lastName: "Coghlan",
        position: "LF",
        fieldPosition: "Outfielders",
        number: 8,
        todaysLineup: true,
        lineupOrder: 2,
        inactive: false,
        images: [{
            profile: "assets/img/cCoghlan.png",
            thumb: "assets/img/cCoghlan-t.png"
        }],
        hittingStats: [{
            avg: '208',
            obp: '283',
            slg: '440'
        }]
    }];

    

})();