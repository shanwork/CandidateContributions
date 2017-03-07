(function () {
    'use strict';
    angular.module('fecPrezMoneyApp').controller('CommitteeMasterController',
        function ($scope,
                    $http,
                    $rootScope,
                    $localStorage,
                    FECDataFactory,
                    CommitteeLinkageFactory
                    ) {
            $scope.init = function () {
                $scope.candidateContributions = CommitteeLinkageFactory.getEntityRecords();
                 
                $scope.retrievedCandidateCommitteeLinkage = true;
                $scope.retrievedCommitteeData = true;
                $scope.committeeDisplaySchema = FECDataFactory.getCommitteeMasterSchema();
                $scope.records = [];//FECDataFactory.getCandidateMasterData(null);
                $scope.candidateDisplaySchema = FECDataFactory.getCandidateMasterSchema();
            }
            $scope.init();
            $scope.uploadCommitteeMaster = function ()
            {
                FECDataFactory.getCommitteeMasterData(committeeMaster.files[0], function callBack(committeeResponse) {
                    alert(committeeResponse.length);
                    $scope.committeerecords = committeeResponse;
                    $scope.retrievedCommitteeData = true;

                });
            }
            $scope.uploadCandidateMaster = function () {
                alert($scope.committeerecords.length);
                FECDataFactory.getCandidateMasterData(candidateMaster.files[0], function callBack(candidateResponse) {
                    alert(candidateResponse.length);
                    $scope.candidateRecords = candidateResponse;
                });
            }
            $scope.uploadCandidateCommitteeLinkage = function () {
                alert($scope.committeerecords.length);
                FECDataFactory.getCandidateCommitteeLinkage(candidateCommitteeLinkage.files[0], function callBack(committeeCandidateResponse) {
                    alert(committeeCandidateResponse.length);
                    $scope.committeeCandidateResponse = committeeCandidateResponse;
                });
            }
            $scope.uploadCommitteeCandidateContributions = function () {
                alert($scope.committeerecords.length);
                FECDataFactory.getCommitteeCandidateContributions(candidateCommitteeContri.files[0], function callBack(committeeCandidateContributionsResponse) {
                    alert(committeeCandidateContributionsResponse.length);
                    $scope.committeeCandidateContributionsResponse = committeeCandidateContributionsResponse;
                });
            }
        })
})();