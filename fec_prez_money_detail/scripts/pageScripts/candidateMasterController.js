(function () {
    'use strict';
    angular.module('fecPrezMoneyApp').controller('CandidateMasterController',
        function ($scope,
                    $http,
                    $rootScope,
                    $localStorage,
                    FECDataFactory
                    ) {
            $scope.init = function () {
                $scope.displaySchema = FECDataFactory.getCandidateMasterSchema();
                $scope.records = FECDataFactory.getCandidateMasterData(null);
            }
            $scope.init();
            $scope.uploadCandidateMaster = function()
            {
                FECDataFactory.getCandidateMasterData(candidateMaster.files[0], function callBack(response) {
                   $scope.records = response ;
                });
            }
        })
})();