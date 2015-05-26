(function () {
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

    var roster = [{
        name: "Anthony Rizzo",
        position: "1B",
        fieldPosition: "Infielders",
        number: 44,
        todaysLineup: true,
        lineupOrder: 3,
        inactive: false,
        images: [{
            profile: "images/aRizzo.png",
            thumb: "images/aRizzo-t.png"
        }],
        hittingStats: [{
            avg: '322',
            obp: '444',
            slg: '586'
        }]
    },
    {
        name: "Addison Russell",
        position: "2B",
        fieldPosition: "Infielders",
        number: 22,
        todaysLineup: true,
        lineupOrder: 9,
        inactive: false,
        images: [{
            profile: "images/aRussell.png",
            thumb: "images/aRussell-t.png"
        }],
        hittingStats: [{
            avg: '241',
            obp: '293',
            slg: '407'
        }]
    },
    {
        name: "Starlin Castro",
        position: "SS",
        fieldPosition: "Infielders",
        number: 13,
        todaysLineup: true,
        lineupOrder: 5,
        inactive: false,
        images: [{
            profile: "images/sCastro.png",
            thumb: "images/sCastro-t.png"
        }],
        hittingStats: [{
            avg: '272',
            obp: '302',
            slg: '347'
        }]
    },
    {
        name: "Javier Baez",
        position: "SS",
        fieldPosition: "Infielders",
        number: 9,
        todaysLineup: false,
        lineupOrder: 0,
        inactive: true,
        images: [{
            profile: "images/jBaez.png",
            thumb: "images/jBaez-t.png"
        }],
        hittingStats: [{
            avg: '169',
            obp: '227',
            slg: '324'
        }]
    },
    {
        name: "Kris Bryant",
        position: "3B",
        fieldPosition: "Infielders",
        number: 17,
        todaysLineup: true,
        lineupOrder: 4,
        inactive: false,
        images: [{
            profile: "images/kBryant.png",
            thumb: "images/kBryant-t.png"
        }],
        hittingStats: [{
            avg: '273',
            obp: '391',
            slg: '445'
        }]
    },
    {
        name: "Miguel Montero",
        position: "C",
        fieldPosition: "Catchers",
        number: 47,
        todaysLineup: true,
        lineupOrder: 7,
        inactive: false,
        images: [{
            profile: "images/mMontero.png",
            thumb: "images/mMontero-t.png"
        }],
        hittingStats: [{
            avg: '267',
            obp: '387',
            slg: '455'
        }]
    },
    {
        name: "David Ross",
        position: "C",
        fieldPosition: "Catchers",
        number: 3,
        todaysLineup: false,
        lineupOrder: 0,
        inactive: false,
        images: [{
            profile: "images/dRoss.png",
            thumb: "images/dRoss-t.png"
        }],
        hittingStats: [{
            avg: '182',
            obp: '341',
            slg: '303'
        }]
    },
    {
        name: "Mike Baxter",
        position: "LF",
        fieldPosition: "Outfielders",
        number: 29,
        todaysLineup: false,
        lineupOrder: 0,
        inactive: false,
        images: [{
            profile: "images/mBaxter.png",
            thumb: "images/mBaxter-t.png"
        }],
        hittingStats: [{
            avg: '000',
            obp: '200',
            slg: '000'
        }]
    },
    {
        name: "Chris Coghlan",
        position: "LF",
        fieldPosition: "Outfielders",
        number: 8,
        todaysLineup: true,
        lineupOrder: 2,
        inactive: false,
        images: [{
            profile: "images/cCoghlan.png",
            thumb: "images/cCoghlan-t.png"
        }],
        hittingStats: [{
            avg: '208',
            obp: '283',
            slg: '440'
        }]
    }];

    function ops(obp, slg) {
        return parseFloat((obp + slg).toFixed(3)); 
    }

})();