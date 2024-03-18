/* tslint:disable */
/* eslint-disable */
/*
Transactions API


The transactions API lets you view your transactions, accounts, and statements.


The version of the OpenAPI document: 1.0
Contact: developer-access@brex.com

NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/

import globalAxios, { AxiosPromise, AxiosInstance, AxiosRequestConfig } from 'axios';
import { Configuration } from '../configuration';
// Some imports not used depending on template conditions
// @ts-ignore
import { DUMMY_BASE_URL, assertParamExists, setApiKeyToObject, setBasicAuthToObject, setBearerAuthToObject, setSearchParams, serializeDataIfNeeded, toPathString, createRequestFunction, isBrowser } from '../common';
import { setOAuthToObject } from '../common';
// @ts-ignore
import { BASE_PATH, COLLECTION_FORMATS, RequestArgs, BaseAPI, RequiredError } from '../base';
// @ts-ignore
import { PageCardTransaction } from '../models';
// @ts-ignore
import { PageCashTransaction } from '../models';
import { paginate } from "../pagination/paginate";
import type * as buffer from "buffer"
import { requestBeforeHook } from '../requestBeforeHook';
/**
 * TransactionsApi - axios parameter creator
 * @export
 */
export const TransactionsApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         *  This endpoint lists all settled transactions for all card accounts. Regular users may only fetch their own \"PURCHASE\",\"REFUND\" and \"CHARGEBACK\" settled transactions. 
         * @summary  List transactions for all card accounts. 
         * @param {string} [cursor] 
         * @param {number} [limit] 
         * @param {Array<string>} [userIds] 
         * @param {string} [postedAtStart]  Shows only transactions with a &#x60;posted_at_date&#x60; on or after this date-time. This parameter is the date-time notation as defined by [RFC 3339, section 5.6](https://tools.ietf.org/html/rfc3339#section-5.6) 
         * @param {Array<string>} [expand] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        listAllCardTransactions: async (cursor?: string, limit?: number, userIds?: Array<string>, postedAtStart?: string, expand?: Array<string>, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/v2/transactions/card/primary`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions: AxiosRequestConfig = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = configuration && !isBrowser() ? { "User-Agent": configuration.userAgent } : {} as any;
            const localVarQueryParameter = {} as any;

            // authentication OAuth2 required
            // oauth required
            await setOAuthToObject(localVarHeaderParameter, "OAuth2", ["transactions.card.readonly"], configuration)
            if (cursor !== undefined) {
                localVarQueryParameter['cursor'] = cursor;
            }

            if (limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
            }

            if (userIds) {
                localVarQueryParameter['user_ids'] = userIds;
            }

            if (postedAtStart !== undefined) {
                localVarQueryParameter['posted_at_start'] = (postedAtStart as any instanceof Date) ?
                    (postedAtStart as any).toISOString() :
                    postedAtStart;
            }

            if (expand) {
                localVarQueryParameter['expand[]'] = expand;
            }


    
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            requestBeforeHook({
                queryParameters: localVarQueryParameter,
                requestConfig: localVarRequestOptions,
                path: localVarPath,
                configuration,
                pathTemplate: '/v2/transactions/card/primary',
                httpMethod: 'GET'
            });

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         *  This endpoint lists all transactions for the cash account with the selected ID. 
         * @summary  List transactions for the selected cash account. 
         * @param {string} id 
         * @param {string} [cursor] 
         * @param {number} [limit] 
         * @param {string} [postedAtStart]  Shows only transactions with a &#x60;posted_at_date&#x60; on or after this date-time. This parameter is the date-time notation as defined by [RFC 3339, section 5.6](https://tools.ietf.org/html/rfc3339#section-5.6) 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        listById: async (id: string, cursor?: string, limit?: number, postedAtStart?: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'id' is not null or undefined
            assertParamExists('listById', 'id', id)
            const localVarPath = `/v2/transactions/cash/{id}`
                .replace(`{${"id"}}`, encodeURIComponent(String(id !== undefined ? id : `-id-`)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions: AxiosRequestConfig = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = configuration && !isBrowser() ? { "User-Agent": configuration.userAgent } : {} as any;
            const localVarQueryParameter = {} as any;

            // authentication OAuth2 required
            // oauth required
            await setOAuthToObject(localVarHeaderParameter, "OAuth2", [], configuration)
            if (cursor !== undefined) {
                localVarQueryParameter['cursor'] = cursor;
            }

            if (limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
            }

            if (postedAtStart !== undefined) {
                localVarQueryParameter['posted_at_start'] = (postedAtStart as any instanceof Date) ?
                    (postedAtStart as any).toISOString() :
                    postedAtStart;
            }


    
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            requestBeforeHook({
                queryParameters: localVarQueryParameter,
                requestConfig: localVarRequestOptions,
                path: localVarPath,
                configuration,
                pathTemplate: '/v2/transactions/cash/{id}',
                httpMethod: 'GET'
            });

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * TransactionsApi - functional programming interface
 * @export
 */
export const TransactionsApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = TransactionsApiAxiosParamCreator(configuration)
    return {
        /**
         *  This endpoint lists all settled transactions for all card accounts. Regular users may only fetch their own \"PURCHASE\",\"REFUND\" and \"CHARGEBACK\" settled transactions. 
         * @summary  List transactions for all card accounts. 
         * @param {TransactionsApiListAllCardTransactionsRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async listAllCardTransactions(requestParameters: TransactionsApiListAllCardTransactionsRequest = {}, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<PageCardTransaction>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.listAllCardTransactions(requestParameters.cursor, requestParameters.limit, requestParameters.userIds, requestParameters.postedAtStart, requestParameters.expand, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         *  This endpoint lists all transactions for the cash account with the selected ID. 
         * @summary  List transactions for the selected cash account. 
         * @param {TransactionsApiListByIdRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async listById(requestParameters: TransactionsApiListByIdRequest, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<PageCashTransaction>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.listById(requestParameters.id, requestParameters.cursor, requestParameters.limit, requestParameters.postedAtStart, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
    }
};

/**
 * TransactionsApi - factory interface
 * @export
 */
export const TransactionsApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = TransactionsApiFp(configuration)
    return {
        /**
         *  This endpoint lists all settled transactions for all card accounts. Regular users may only fetch their own \"PURCHASE\",\"REFUND\" and \"CHARGEBACK\" settled transactions. 
         * @summary  List transactions for all card accounts. 
         * @param {TransactionsApiListAllCardTransactionsRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        listAllCardTransactions(requestParameters: TransactionsApiListAllCardTransactionsRequest = {}, options?: AxiosRequestConfig): AxiosPromise<PageCardTransaction> {
            return localVarFp.listAllCardTransactions(requestParameters, options).then((request) => request(axios, basePath));
        },
        /**
         *  This endpoint lists all transactions for the cash account with the selected ID. 
         * @summary  List transactions for the selected cash account. 
         * @param {TransactionsApiListByIdRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        listById(requestParameters: TransactionsApiListByIdRequest, options?: AxiosRequestConfig): AxiosPromise<PageCashTransaction> {
            return localVarFp.listById(requestParameters, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * Request parameters for listAllCardTransactions operation in TransactionsApi.
 * @export
 * @interface TransactionsApiListAllCardTransactionsRequest
 */
export type TransactionsApiListAllCardTransactionsRequest = {
    
    /**
    * 
    * @type {string}
    * @memberof TransactionsApiListAllCardTransactions
    */
    readonly cursor?: string
    
    /**
    * 
    * @type {number}
    * @memberof TransactionsApiListAllCardTransactions
    */
    readonly limit?: number
    
    /**
    * 
    * @type {Array<string>}
    * @memberof TransactionsApiListAllCardTransactions
    */
    readonly userIds?: Array<string>
    
    /**
    *  Shows only transactions with a `posted_at_date` on or after this date-time. This parameter is the date-time notation as defined by [RFC 3339, section 5.6](https://tools.ietf.org/html/rfc3339#section-5.6) 
    * @type {string}
    * @memberof TransactionsApiListAllCardTransactions
    */
    readonly postedAtStart?: string
    
    /**
    * 
    * @type {Array<string>}
    * @memberof TransactionsApiListAllCardTransactions
    */
    readonly expand?: Array<string>
    
}

/**
 * Request parameters for listById operation in TransactionsApi.
 * @export
 * @interface TransactionsApiListByIdRequest
 */
export type TransactionsApiListByIdRequest = {
    
    /**
    * 
    * @type {string}
    * @memberof TransactionsApiListById
    */
    readonly id: string
    
    /**
    * 
    * @type {string}
    * @memberof TransactionsApiListById
    */
    readonly cursor?: string
    
    /**
    * 
    * @type {number}
    * @memberof TransactionsApiListById
    */
    readonly limit?: number
    
    /**
    *  Shows only transactions with a `posted_at_date` on or after this date-time. This parameter is the date-time notation as defined by [RFC 3339, section 5.6](https://tools.ietf.org/html/rfc3339#section-5.6) 
    * @type {string}
    * @memberof TransactionsApiListById
    */
    readonly postedAtStart?: string
    
}

/**
 * TransactionsApiGenerated - object-oriented interface
 * @export
 * @class TransactionsApiGenerated
 * @extends {BaseAPI}
 */
export class TransactionsApiGenerated extends BaseAPI {
    /**
     *  This endpoint lists all settled transactions for all card accounts. Regular users may only fetch their own \"PURCHASE\",\"REFUND\" and \"CHARGEBACK\" settled transactions. 
     * @summary  List transactions for all card accounts. 
     * @param {TransactionsApiListAllCardTransactionsRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof TransactionsApiGenerated
     */
    public listAllCardTransactions(requestParameters: TransactionsApiListAllCardTransactionsRequest = {}, options?: AxiosRequestConfig) {
        return TransactionsApiFp(this.configuration).listAllCardTransactions(requestParameters, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     *  This endpoint lists all transactions for the cash account with the selected ID. 
     * @summary  List transactions for the selected cash account. 
     * @param {TransactionsApiListByIdRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof TransactionsApiGenerated
     */
    public listById(requestParameters: TransactionsApiListByIdRequest, options?: AxiosRequestConfig) {
        return TransactionsApiFp(this.configuration).listById(requestParameters, options).then((request) => request(this.axios, this.basePath));
    }
}
