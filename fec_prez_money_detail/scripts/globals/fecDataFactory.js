/* README 
Lawrence Berkeley Labs Coding assigment
File fecDataFactory.js
Layer -  Data Model/backend/ Factory Class.
At this point, the approach is to create just the one singleton class. All data is channelled and (where required) processed through this file
 
Detail as on Feb 25
As a temporary solution where the application backend is a dB free (sql or no sql) configuration, the ETL is as follows
Components
1. The raw data flat files from the fec website. 
  - These are 'headless (no field name)' files where the data is in pipe delimited rows

2. schema.sql. angular factory file
 - Manual creation of the schema. 
 - This is a bunch of JSON object lists 
 - each list corresponds to a data element master file on the FEC website
 - the objects in each list have 'key', 'display name', 'type'

3. THIS FILE fecDataFactory.js - angular factory file
 - this is a set of functions which return the JSON data objects. 
 - This file will be iteratively refactored or have api added to move from reading the (above) flat file data and schema to consuming some webservice somewhere
 - In its current iteration, it will be injected with the Schema object. 
 - In its current iteration, each data element will have a function, which will read the schema, the corresponding flat file and return the JSON to the calling function
 - The (above) two will be replaced by a single function invoking a webservice and send a callback


*/

(function () {

    'use strict';
    angular.module('fecPrezMoneyApp').factory("FECDataFactory", ['CandidateComitteeFundCore', '$http',  function (CandidateComitteeFundCore, $http) {
        var fecDataFactory = {
             
        };
        fecDataFactory.chartData = [
            {
                "key": "Contribution",
                "bar": true,
                "values": []
            }];
        fecDataFactory.keys = [];

        // This should be the actual REST API call, but my WCF based webservice configuration is not working, 
        // So the sync callback below
        fecDataFactory.getCandidateBasedContributions = function (  callBack) {
            
            var url = "http://localhost:56158/FECFunding.svc/GetCandidateBasedFunding";
            $http.get(url).
              success(
                function (data) {
                    console.log(data);
                    callBack(data);
                }
            ).
            error(
               function () {
                   callBack(null);
               }
            )
          
        }
        fecDataFactory.populateRecordChartData = function () {
            var entityRecords = CandidateComitteeFundCore
            var chartData = [];
            for (var i = 0; i < entityRecords.length; i++) {
                var extractedRecord = [entityRecords[i].CAND_ID, i, parseFloat(entityRecords[i].TRANSACTION_AMT)];
                fecDataFactory.chartData[0].values.push(extractedRecord);
                fecDataFactory.keys.push(entityRecords[i].CAND_ID);
            }
        }
        return fecDataFactory;
    }]);
})();