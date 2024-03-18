/*
Transactions API


The transactions API lets you view your transactions, accounts, and statements.


The version of the OpenAPI document: 1.0
Contact: developer-access@brex.com

NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"

import { CardTransactionMerchant } from './card-transaction-merchant';
import { CardTransactionType } from './card-transaction-type';
import { Money } from './money';

/**
 * 
 * @export
 * @interface CardTransaction
 */
export interface CardTransaction {
    /**
     * Description of the transaction
     * @type {string}
     * @memberof CardTransaction
     */
    'description': string;
    /**
     * 
     * @type {string}
     * @memberof CardTransaction
     */
    'id': string;
    /**
     * ID of the card used for the transaction. Null when type is REWARDS_CREDIT or COLLECTION.
     * @type {string}
     * @memberof CardTransaction
     */
    'card_id'?: string | null;
    /**
     * 
     * @type {Money}
     * @memberof CardTransaction
     */
    'amount': Money;
    /**
     * ISO 8601 date string
     * @type {string}
     * @memberof CardTransaction
     */
    'initiated_at_date': string;
    /**
     * ISO 8601 date string
     * @type {string}
     * @memberof CardTransaction
     */
    'posted_at_date': string;
    /**
     * 
     * @type {CardTransactionType}
     * @memberof CardTransaction
     */
    'type'?: CardTransactionType;
    /**
     * 
     * @type {CardTransactionMerchant}
     * @memberof CardTransaction
     */
    'merchant'?: CardTransactionMerchant;
    /**
     *  Set of key value pairs associated with this object. Please do not store any personally identifiable or sensitive information here. Limitations: maximum of 50 keys, keys cannot exceed 40 characters, values cannot exceed 500 characters.  
     * @type {{ [key: string]: string; }}
     * @memberof CardTransaction
     */
    'card_metadata'?: { [key: string]: string; } | null;
    /**
     * The expense ID related to the card transaction.
     * @type {string}
     * @memberof CardTransaction
     */
    'expense_id'?: string | null;
}

