/*
Transactions API


The transactions API lets you view your transactions, accounts, and statements.


The version of the OpenAPI document: 1.0
Contact: developer-access@brex.com

NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"


/**
 * 
 * @export
 * @interface StatementPeriod
 */
export interface StatementPeriod {
    /**
     * Start date of the statement period
     * @type {string}
     * @memberof StatementPeriod
     */
    'start_date': string;
    /**
     * End date of the statement period
     * @type {string}
     * @memberof StatementPeriod
     */
    'end_date': string;
}

