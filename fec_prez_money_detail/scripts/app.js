/* README 
Lawrence Berkeley Labs Coding assigment
File app.js
Layer - Front end root module 
defines the angularjs module 'fecPrezMoneyApp' object for the application
The requirements are pretty straightforward and really dont justify the need for a single page app format with multiple views, but following 
basic coding practice of extendibility, have created a distribution and put in the requirement in a view html component
*/
(function () {
    'use strict';
    var fecPrezMoneyApp = angular.module('fecPrezMoneyApp', ['ngRoute', 'ngStorage', 'ngCookies', 'nvd3']);
     
    // have a simple controller to display globals. This is not part of the views as such
    fecPrezMoneyApp.controller('IndexPageController', function ($scope, GeneralConfig) {
        $scope.init = function () {
            $scope.currentYear = GeneralConfig.getDataYear();
        }
        $scope.init();
    } );
    fecPrezMoneyApp.config(function ($routeProvider) {
        $routeProvider
            .when('/contributionsByCommitee', {
                controller: 'CommitteeContributionsController',
                templateUrl: 'markup/views/committeeContributions.html'
            })

        .when('/candidateMaster', {
            controller: 'CommitteeContributionsController',
            templateUrl: 'markup/views/committeeContributions.html'
        })

        .when('/committeeMaster', {
            controller: 'CommitteeContributionsController',
            templateUrl: 'markup/views/committeeContributions.html'
        })/*
        .when('/candidateMaster', {
            controller: 'CandidateMasterController',
            templateUrl: 'markup/views/candidateMaster.html'
        })

        .when('/committeeMaster', {
            controller: 'CommitteeMasterController',
            templateUrl: 'markup/views/committeeMaster.html'
        })
            .when('/home', {
                controller: 'HomeController',
                templateUrl: 'views/home.html'
            })*/
            
                .otherwise({ redirectTo: '/contributionsByCommitee' /*contributionsByCommitee'*/ });
    }),
            function ($httpProvider) {
                $httpProvider.defaults.headers.common = {};
                $httpProvider.defaults.headers.post = {};
                $httpProvider.defaults.headers.put = {};
            };
})();

