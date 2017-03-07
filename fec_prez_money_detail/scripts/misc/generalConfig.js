/* README 
Lawrence Berkeley Labs Coding assigment
File generalConfig.js
Layer - Misc
Detail
returns misc items like the financial year
*/

(function () {

    'use strict';
    angular.module('fecPrezMoneyApp').factory("GeneralConfig", [function () {
        var generalConfig = {
            currentDataFolder: 'data_2015_2016'
        };
        
        generalConfig.getDataYear = function () {

            return this.currentDataFolder;


        }

        return generalConfig;
    }]);
})();