System.register(['angular2/core', 'angular2/router', './matches.component', './leaderboard.component', './hero-detail.component', './hero.service'], function(exports_1, context_1) {
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
    var core_1, router_1, matches_component_1, leaderboard_component_1, hero_detail_component_1, hero_service_1;
    var AppComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (matches_component_1_1) {
                matches_component_1 = matches_component_1_1;
            },
            function (leaderboard_component_1_1) {
                leaderboard_component_1 = leaderboard_component_1_1;
            },
            function (hero_detail_component_1_1) {
                hero_detail_component_1 = hero_detail_component_1_1;
            },
            function (hero_service_1_1) {
                hero_service_1 = hero_service_1_1;
            }],
        execute: function() {
            AppComponent = (function () {
                function AppComponent() {
                    this.title = 'Squashsson!';
                }
                AppComponent = __decorate([
                    core_1.Component({
                        selector: 'squashsson-app',
                        template: "\n    <h1>{{title}}</h1>\n    <nav>\n      <a [routerLink]=\"['Matches']\">Matches</a>\n      <a [routerLink]=\"['Leaderboard']\">Leaderboard</a>\n    </nav>\n    <router-outlet></router-outlet>\n  ",
                        styleUrls: ['app/app.component.css'],
                        directives: [router_1.ROUTER_DIRECTIVES],
                        providers: [
                            router_1.ROUTER_PROVIDERS,
                            hero_service_1.HeroService
                        ]
                    }),
                    router_1.RouteConfig([
                        {
                            path: '/matches',
                            name: 'Matches',
                            component: matches_component_1.MatchesComponent,
                            useAsDefault: true
                        },
                        {
                            path: '/detail/:id',
                            name: 'HeroDetail',
                            component: hero_detail_component_1.HeroDetailComponent
                        },
                        {
                            path: '/leaderboard',
                            name: 'Leaderboard',
                            component: leaderboard_component_1.LeaderboardComponent
                        }
                    ]), 
                    __metadata('design:paramtypes', [])
                ], AppComponent);
                return AppComponent;
            }());
            exports_1("AppComponent", AppComponent);
        }
    }
});
//# sourceMappingURL=app.component.js.map