System.register(['angular2/core', './mock-players'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, mock_players_1;
    var PlayerService;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (mock_players_1_1) {
                mock_players_1 = mock_players_1_1;
            }],
        execute: function() {
            PlayerService = (function () {
                function PlayerService() {
                }
                PlayerService.prototype.getPlayers = function () {
                    return Promise.resolve(mock_players_1.PLAYERS);
                };
                PlayerService.prototype.reset = function () {
                    var i;
                    for (i = 0; i < mock_players_1.PLAYERS.length; i++) {
                        mock_players_1.PLAYERS[i].points = 0;
                    }
                };
                PlayerService.prototype.update = function (winner) {
                    mock_players_1.PLAYERS[winner - 1].points += 2;
                    return;
                    var i;
                    for (i = 0; i < mock_players_1.PLAYERS.length; i++) {
                        var j;
                        for (j = (i + 1); j < mock_players_1.PLAYERS.length; j++) {
                            if (mock_players_1.PLAYERS[j].points > mock_players_1.PLAYERS[i].points) {
                                var tmp;
                                tmp = mock_players_1.PLAYERS[i];
                                mock_players_1.PLAYERS[i] = mock_players_1.PLAYERS[j];
                                mock_players_1.PLAYERS[j] = tmp;
                            }
                        }
                    }
                };
                PlayerService = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [])
                ], PlayerService);
                return PlayerService;
            }());
            exports_1("PlayerService", PlayerService);
        }
    }
});
//# sourceMappingURL=player.service.js.map