(function () {
    'use strict';
    angular.module('fecPrezMoneyApp').controller('CommitteeContributionsController',
        function ($scope,
                    $http,
                    $rootScope,
                    $localStorage,
                    CommitteeLinkageFactory,
                    FECDataFactory
                    ) {
            $scope.init = function () {
                $scope.options = {
                    chart: {
                        type: 'historicalBarChart',
                        height: 450,
                        margin: {
                            top: 20,
                            right: 20,
                            bottom: 65,
                            left: 50
                        },
                        x: function (d) { return d[1] },
                        y: function (d) { return d[2] ; },
                        showValues: true,
                        valueFormat: function (d) {
                            return d;
                        },
                        duration: 100,
                        xAxis: {
                            axisLabel: 'X Axis',
                            tickFormat: function (d) {
                                return $scope.keys[d];
                            },
                            rotateLabels: 30,
                            showMaxMin: false
                        },
                        yAxis: {
                            axisLabel: 'Y Axis',
                            axisLabelDistance: -10,
                            tickFormat: function (d) {
                                return d3.format(',.1f')(d);
                            }
                        },
                        tooltip: {
                            keyFormatter: function (d) {
                                return d;
                            }
                        },
                        zoom: {
                            enabled: true,
                            scaleExtent: [1, 10],
                            useFixedDomain: false,
                            useNiceScale: false,
                            horizontalOff: false,
                            verticalOff: true,
                            unzoomEventType: 'dblclick.zoom'
                        }
                    }
                };
                $scope.candidateContributions = FECDataFactory.populateRecordChartData();
                $scope.keys = FECDataFactory.keys;//['A', 'B'];
                $scope.data = FECDataFactory.chartData;
            }
             $scope.init();
        })
})();