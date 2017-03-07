/* README 
Lawrence Berkeley Labs Coding assigment
File Schema.js
Layer - Data Model/backend
Detail
As a temporary solution where the application backend is a dB free (sql or no sql) configuration, the ETL is as follows
Components
1. The raw data flat files from the fec website. 
  - These are 'headless (no field name)' files where the data is in pipe delimited rows

2. THIS FILE schema.sql. angular factory file
 - Manual creation of the schema. 
 - This is a bunch of JSON object lists 
 - each list corresponds to a data element master file on the FEC website
 - the objects in each list have 'key', 'display name', 'type'

3. fecDataFactory.js - angular factory file
 - this is a set of functions which return the JSON data objects. 
 - This file will be iteratively refactored or have api added to move from reading the (above) flat file data and schema to consuming some webservice somewhere
 - In its current iteration, it will be injected with the Schema object. 
 - In its current iteration, each data element will have a function, which will read the schema, the corresponding flat file and return the JSON to the calling function
 - The (above) two will be replaced by a single function invoking a webservice and send a callback
*/

(function () {

    'use strict';
    angular.module('fecPrezMoneyApp').factory("Schema", [function () {
        var schema = {

        };
        // rphuv014 -> rphuv014.ple.roche.com
        var candidateMaster = [
            {
            key: 'CAND_ID',
            display: 'Candidate Identification',
            type:"primary text"

        },
        {
            key: 'CAND_NAME',
            display: 'Candidate Name',
            type:'text'

        }, {
            key: 'CAND_PTY_AFFILIATION',
            display: 'Party Affiliation',
            type: "text"

        },
        {
            key: 'CAND_ELECTION_YR',
            display: 'Year of Election',
            type: 'text'

        }, {
            key: 'CAND_OFFICE_ST',
            display: 'Candidate State',
            type: "text"

        },
        {
            key: 'CAND_OFFICE',
            display: 'Candidate Office',
            type: 'text'

        }, {
            key: 'CAND_OFFICE_DISTRICT',
            display: 'Candidate District',
            type: "text"

        },
        {
            key: 'CAND_ICI',
            display: 'Incumbent Challenger Status',
            type: 'text'

        }, {
            key: 'CAND_STATUS',
            display: 'Candidate Status',
            type: "primary text"

        },
        {
            key: 'CAND_PCC',
            display: 'Principal Campaign Committee',
            type: 'text'

        }, {
            key: 'CAND_ST1',
            display: 'Mailing Address - Street',
            type: "text"

        },
        {
            key: 'CAND_ST2',
            display: 'Mailing Address - Street2 ',
            type: 'text'

        }, {
            key: 'CAND_CITY',
            display: 'Mailing Address - City ',
            type: "text"

        },
        {
            key: 'CAND_ST',
            display: 'Mailing Address - State ',
            type: 'text'

        }, {
            key: 'CAND_ZIP',
            display: 'Mailing Address - Zip',
            type: "primary text"

        } ];
        
        var committeeMaster = [
            {
                key: 'CMTE_ID',
                display: 'Committee Identification',
                type: "primary text"

            },
        {
            key: 'CMTE_NM',
            display: 'Committee Name',
            type: 'text'

        }, {
            key: 'TRES_NM',
            display: 'Treasurer\'s Name',
            type: "text"

        },
        {
            key: 'CMTE_ST1',
            display: 'Street One',
            type: 'text'

        },
        {
            key: 'CMTE_ST2',
            display: 'Street Two',
            type: 'text'

        },
        {
            key: 'CMTE_CITY',
            display: 'City or Town',
            type: 'text'

        }, {
            key: 'CMTE_ST',
            display: 'State',
            type: "text"

        },
        {
            key: 'CMTE_ZIP',
            display: 'Zip Code',
            type: 'text'

        }, {
            key: 'CMTE_DSGN',
            display: 'Committee Designation',
            type: "primary text"

        },
        {
            key: 'CMTE_TP',
            display: 'Committee Type',
            type: 'text'

        }, {
            key: 'CMTE_PTY_AFFILIATION',
            display: 'Committee Party',
            type: "text"

        },
        {
            key: 'CMTE_FILING_FREQ',
            display: 'Filing Frequency',
            type: 'text'

        }, {
            key: 'ORG_TP',
            display: 'Interest Group Category',
            type: "text"

        },
        {
            key: 'CONNECTED_ORG_NM',
            display: 'Connected Organization\'s Name',
            type: 'text'

        }, {
            key: 'CAND_ID',
            display: 'Candidate Identification',
            type: "primary text"

        }];

        var committeeCandidateLinkage = [
            {
                key: 'CAND_ID',
                display: 'Candidate Identification',
                type: "text"

            },
        {
            key: 'CAND_ELECTION_YR',
            display: 'Candidate Election Year',
            type: 'text'

        },
        {
            key: 'FEC_ELECTION_YR',
            display: 'FEC Election Year',
            type: 'text'

        },
        {
            key: 'CMTE_ID',
            display: 'Committee Identification',
            type: "text"

        },
        {
            key: 'CMTE_TP',
            display: 'Committee Type',
            type: 'text'

        },
        {
            key: 'CMTE_DSGN',
            display: 'Committee Designation',
            type: 'text'

        },
        {
            key: 'LINKAGE_ID',
            display: 'Linkage ID',
            type: 'primary text'

        }];
        var committeeCandidateContributions =
            [
          {
              key: 'CMTE_ID',
              display: 'Filer Identification Number',
              type: "primary text"

          }, {
              key: 'AMNDT_IND',
              display: 'Amendment Indicator',
              type: "text"

          }, {
              key: 'RPT_TP',
              display: 'Report Type',
              type: "text"

          }, {
              key: 'TRANSACTION_PGI',
              display: 'Primary-General Indicator',
              type: "text"

          }, {
              key: 'IMAGE_NUM',
              display: 'Image Number',
              type: "text"

          }, {
              key: 'TRANSACTION_TP',
              display: 'Transaction Type',
              type: "text"

          }, {
              key: 'ENTITY_TP',
              display: 'Entity Type',
              type: "text"

          }, {
              key: 'NAME',
              display: 'Recipient/Payee',
              type: "text"

          }, {
              key: 'CITY',
              display: 'City/Town',
              type: "text"

          }, {
              key: 'STATE',
              display: 'State',
              type: "text"

          }, {
              key: 'ZIP_CODE',
              display: 'Zip Code',
              type: "text"

          }, {
              key: 'EMPLOYER',
              display: 'Employer',
              type: "text"

          }, {
              key: 'OCCUPATION',
              display: 'Occupation',
              type: "text"

          }, {
              key: 'TRANSACTION_DT',
              display: 'Transaction Date(MMDDYYYY)',
              type: "text"

          }, {
              key: 'TRANSACTION_AMT',
              display: 'Transaction Amount',
              type: "text"

          }, {
              key: 'OTHER_ID',
              display: 'Other Identification Number',
              type: "text"

          }, {
              key: 'CAND_ID',
              display: 'Candidate Identification Number',
              type: "text"

          }, {
              key: 'TRAN_ID',
              display: 'Transaction ID',
              type: "text"

          }, {
              key: 'FILE_NUM',
              display: 'File Number / Report ID',
              type: "text"

          }, {
              key: 'MEMO_CD',
              display: 'Memo Code',
              type: "text"

          }, {
              key: 'MEMO_TEXT',
              display: 'Memo Text',
              type: "text"

          }, {
              key: 'SUB_ID',
              display: 'FEC Record Number',
              type: "text"

          }];
   
        schema.getCandidateSchema = function () {

            return candidateMaster;


        }
        schema.getCommitteeMasterSchema = function() {
            return committeeMaster;
        }
        schema.getCandidateCommitteeSchema = function () {
            return committeeCandidateLinkage;
        }

        schema.getCommitteeCandidateContributionsSchema = function() {
            return committeeCandidateContributions;
        }
        schema.getData = function (schema, rawData) {
            var recordList = [];
            for (var i = 0; i < rawData.length; i++) {
                var lineBreakUp = [];// taking care of blank records
                var lineBreakUp = rawData[i].data.split('|');
                var dataElement = new Object();
                for (var j = 0; j < lineBreakUp.length; j++) {
                    dataElement[schema[j].key] = lineBreakUp[j];
                }
                // taking care of blank fields
                for (; j < schema.length; j++) {
                    dataElement[schema[j].key] = '';
                }
                recordList.push(dataElement);
            }
            return recordList;
        }
        return schema;
    }]);
})();
