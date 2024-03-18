/*
Transactions API


The transactions API lets you view your transactions, accounts, and statements.


The version of the OpenAPI document: 1.0
Contact: developer-access@brex.com

NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"

import { CardAccountCurrentBalance } from './card-account-current-balance';
import { StatementPeriod } from './statement-period';

/**
 * 
 * @export
 * @interface Statement
 */
export interface Statement {
    /**
     * 
     * @type {string}
     * @memberof Statement
     */
    'id': string;
    /**
     * 
     * @type {CardAccountCurrentBalance}
     * @memberof Statement
     */
    'start_balance'?: CardAccountCurrentBalance;
    /**
     * 
     * @type {CardAccountCurrentBalance}
     * @memberof Statement
     */
    'end_balance'?: CardAccountCurrentBalance;
    /**
     * 
     * @type {StatementPeriod}
     * @memberof Statement
     */
    'period': StatementPeriod;
}

