(function () {

    'use strict';
    angular.module('fecPrezMoneyApp').factory('CandidateComitteeFundCore', [ function ( ) {
        var candidateComitteeFundCore = {

        };
       var entityRecords =[{
CMTE_ID: 'C00411116',
AMNDT_IND: 'N',
RPT_TP: 'M4',
TRANSACTION_PGI: 'P',
IMAGE_NUM: '15970337994',
TRANSACTION_TP: '24K',
ENTITY_TP: 'COM',
NAME: 'ADAM SCHIFF FOR CONGRESS',
CITY: 'LOS ANGELES',
STATE: 'CA',
ZIP_CODE: '90017',
EMPLOYER: '',
OCCUPATION: '',
TRANSACTION_DT: '03062015',
TRANSACTION_AMT: '1000',
OTHER_ID: 'C00343871',
CAND_ID: 'H0CA27085',
TRAN_ID: 'B4BF70EFB1C4E4348BC6',
FILE_NUM: '1002269',
MEMO_CD: '',
MEMO_TEXT: '',
SUB_ID: '4041320151241802172' 
}
,
{
CMTE_ID: 'C00411116',
AMNDT_IND: 'N',
RPT_TP: 'M4',
TRANSACTION_PGI: 'P',
IMAGE_NUM: '15970337996',
TRANSACTION_TP: '24K',
ENTITY_TP: 'COM',
NAME: 'GRAVES FOR CONGRESS',
CITY: 'CALHOUN',
STATE: 'GA',
ZIP_CODE: '30703',
EMPLOYER: '',
OCCUPATION: '',
TRANSACTION_DT: '03132015',
TRANSACTION_AMT: '2000',
OTHER_ID: 'C00462556',
CAND_ID: 'H0GA09030',
TRAN_ID: 'B6F8C80B7A84041D49C4',
FILE_NUM: '1002269',
MEMO_CD: '',
MEMO_TEXT: '',
SUB_ID: '4041320151241802178' 
}
,
{
CMTE_ID: 'C00411116',
AMNDT_IND: 'N',
RPT_TP: 'M4',
TRANSACTION_PGI: 'P',
IMAGE_NUM: '15970337995',
TRANSACTION_TP: '24K',
ENTITY_TP: 'COM',
NAME: 'GALLEGO FOR ARIZONA',
CITY: 'PHOENIX',
STATE: 'AZ',
ZIP_CODE: '85001',
EMPLOYER: '',
OCCUPATION: '',
TRANSACTION_DT: '03272015',
TRANSACTION_AMT: '1000',
OTHER_ID: 'C00558627',
CAND_ID: 'H4AZ07043',
TRAN_ID: 'B80AA63AFD2194004839',
FILE_NUM: '1002269',
MEMO_CD: '',
MEMO_TEXT: '',
SUB_ID: '4041320151241802177' 
}
,
{
CMTE_ID: 'C00411116',
AMNDT_IND: 'N',
RPT_TP: 'M4',
TRANSACTION_PGI: 'P',
IMAGE_NUM: '15970337994',
TRANSACTION_TP: '24K',
ENTITY_TP: 'COM',
NAME: 'COMMITTEE TO RE-ELECT LORETTA SANCHEZ',
CITY: 'SANTA ANA',
STATE: 'CA',
ZIP_CODE: '92706',
EMPLOYER: '',
OCCUPATION: '',
TRANSACTION_DT: '03252015',
TRANSACTION_AMT: '2000',
OTHER_ID: 'C00326264',
CAND_ID: 'H6CA46033',
TRAN_ID: 'B6C811FFD3D50426C8ED',
FILE_NUM: '1002269',
MEMO_CD: '',
MEMO_TEXT: '',
SUB_ID: '4041320151241802173' 
}
,
{
CMTE_ID: 'C00411116',
AMNDT_IND: 'N',
RPT_TP: 'M4',
TRANSACTION_PGI: 'P',
IMAGE_NUM: '15970337995',
TRANSACTION_TP: '24K',
ENTITY_TP: 'COM',
NAME: 'FEINSTEIN FOR SENATE 2018',
CITY: 'WASHINGTON',
STATE: 'DC',
ZIP_CODE: '20003',
EMPLOYER: '',
OCCUPATION: '',
TRANSACTION_DT: '03272015',
TRANSACTION_AMT: '2000',
OTHER_ID: 'C00539890',
CAND_ID: 'S0CA00199',
TRAN_ID: 'BEE18AC9C53494A20966',
FILE_NUM: '1002269',
MEMO_CD: '',
MEMO_TEXT: '',
SUB_ID: '4041320151241802176' 
}
,
{
CMTE_ID: 'C00411116',
AMNDT_IND: 'N',
RPT_TP: 'M4',
TRANSACTION_PGI: 'P',
IMAGE_NUM: '15970337994',
TRANSACTION_TP: '24K',
ENTITY_TP: 'COM',
NAME: 'DEB FISCHER FOR US SENATE INC',
CITY: 'LINCOLN',
STATE: 'NE',
ZIP_CODE: '68506',
EMPLOYER: '',
OCCUPATION: '',
TRANSACTION_DT: '03092015',
TRANSACTION_AMT: '1000',
OTHER_ID: 'C00498907',
CAND_ID: 'S2NE00094',
TRAN_ID: 'BC4F3304E537E4E8CBFC',
FILE_NUM: '1002269',
MEMO_CD: '',
MEMO_TEXT: '',
SUB_ID: '4041320151241802174' 
}
        ];
        
                                candidateComitteeFundCore.getEntityRecords = function ()
                                {
                                     return entityRecords;
                                }
                               
                                return candidateComitteeFundCore;
                        }]);
                    })();