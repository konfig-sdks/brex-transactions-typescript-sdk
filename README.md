<div align="left">

[![Visit Brex](./header.png)](https://brex.com)

# [Brex](https://brex.com)<a id="brex"></a>


The transactions API lets you view your transactions, accounts, and statements.


</div>

## Table of Contents<a id="table-of-contents"></a>

<!-- toc -->

- [Installation](#installation)
- [Getting Started](#getting-started)
- [Reference](#reference)
  * [`brextransactions.accounts.getCashAccount`](#brextransactionsaccountsgetcashaccount)
  * [`brextransactions.accounts.listCardAccounts`](#brextransactionsaccountslistcardaccounts)
  * [`brextransactions.accounts.listCashAccounts`](#brextransactionsaccountslistcashaccounts)
  * [`brextransactions.accounts.listCashStatements`](#brextransactionsaccountslistcashstatements)
  * [`brextransactions.accounts.listPrimaryCardStatements`](#brextransactionsaccountslistprimarycardstatements)
  * [`brextransactions.accounts.status`](#brextransactionsaccountsstatus)
  * [`brextransactions.transactions.listAllCardTransactions`](#brextransactionstransactionslistallcardtransactions)
  * [`brextransactions.transactions.listById`](#brextransactionstransactionslistbyid)

<!-- tocstop -->

## Installation<a id="installation"></a>
<div align="center">
  <a href="https://konfigthis.com/sdk-sign-up?company=Brex&serviceName=Transactions&language=TypeScript">
    <img src="https://raw.githubusercontent.com/konfig-dev/brand-assets/HEAD/cta-images/typescript-cta.png" width="70%">
  </a>
</div>

## Getting Started<a id="getting-started"></a>

```typescript
import { BrexTransactions } from "brex-transactions-typescript-sdk";

const brextransactions = new BrexTransactions({
  // Defining the base path is optional and defaults to https://platform.brexapis.com
  // basePath: "https://platform.brexapis.com",
});

const getCashAccountResponse = await brextransactions.accounts.getCashAccount({
  id: "id_example",
});

console.log(getCashAccountResponse);
```

## Reference<a id="reference"></a>


### `brextransactions.accounts.getCashAccount`<a id="brextransactionsaccountsgetcashaccount"></a>


This endpoint returns the cash account associated with the provided ID with its status.


#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getCashAccountResponse = await brextransactions.accounts.getCashAccount({
  id: "id_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### id: `string`<a id="id-string"></a>

#### 🔄 Return<a id="🔄-return"></a>

[CashAccount](./models/cash-account.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/v2/accounts/cash/{id}` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `brextransactions.accounts.listCardAccounts`<a id="brextransactionsaccountslistcardaccounts"></a>


This endpoint lists all accounts of card type.


#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const listCardAccountsResponse =
  await brextransactions.accounts.listCardAccounts();
```

#### 🔄 Return<a id="🔄-return"></a>

[CardAccount](./models/card-account.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/v2/accounts/card` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `brextransactions.accounts.listCashAccounts`<a id="brextransactionsaccountslistcashaccounts"></a>


This endpoint lists all the existing cash accounts with their status.


#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const listCashAccountsResponse =
  await brextransactions.accounts.listCashAccounts();
```

#### 🔄 Return<a id="🔄-return"></a>

[PageCashAccount](./models/page-cash-account.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/v2/accounts/cash` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `brextransactions.accounts.listCashStatements`<a id="brextransactionsaccountslistcashstatements"></a>


This endpoint lists all finalized statements for the cash account by ID.


#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const listCashStatementsResponse =
  await brextransactions.accounts.listCashStatements({
    id: "id_example",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### id: `string`<a id="id-string"></a>

##### cursor: `string`<a id="cursor-string"></a>

##### limit: `number`<a id="limit-number"></a>

#### 🔄 Return<a id="🔄-return"></a>

[PageStatement](./models/page-statement.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/v2/accounts/cash/{id}/statements` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `brextransactions.accounts.listPrimaryCardStatements`<a id="brextransactionsaccountslistprimarycardstatements"></a>


This endpoint lists all finalized statements for the primary card account.


#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const listPrimaryCardStatementsResponse =
  await brextransactions.accounts.listPrimaryCardStatements({});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### cursor: `string`<a id="cursor-string"></a>

##### limit: `number`<a id="limit-number"></a>

#### 🔄 Return<a id="🔄-return"></a>

[PageStatement](./models/page-statement.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/v2/accounts/card/primary/statements` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `brextransactions.accounts.status`<a id="brextransactionsaccountsstatus"></a>


This endpoint returns the primary cash account with its status. There will always be only one primary account.


#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const statusResponse = await brextransactions.accounts.status();
```

#### 🔄 Return<a id="🔄-return"></a>

[CashAccount](./models/cash-account.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/v2/accounts/cash/primary` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `brextransactions.transactions.listAllCardTransactions`<a id="brextransactionstransactionslistallcardtransactions"></a>


This endpoint lists all settled transactions for all card accounts.
Regular users may only fetch their own "PURCHASE","REFUND" and "CHARGEBACK" settled transactions.


#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const listAllCardTransactionsResponse =
  await brextransactions.transactions.listAllCardTransactions({});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### cursor: `string`<a id="cursor-string"></a>

##### limit: `number`<a id="limit-number"></a>

##### userIds: `string`[]<a id="userids-string"></a>

##### postedAtStart: `string`<a id="postedatstart-string"></a>

 Shows only transactions with a `posted_at_date` on or after this date-time. This parameter is the date-time notation as defined by [RFC 3339, section 5.6](https://tools.ietf.org/html/rfc3339#section-5.6) 

##### expand: `string`[]<a id="expand-string"></a>

#### 🔄 Return<a id="🔄-return"></a>

[PageCardTransaction](./models/page-card-transaction.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/v2/transactions/card/primary` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `brextransactions.transactions.listById`<a id="brextransactionstransactionslistbyid"></a>


This endpoint lists all transactions for the cash account with the selected ID.


#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const listByIdResponse = await brextransactions.transactions.listById({
  id: "id_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### id: `string`<a id="id-string"></a>

##### cursor: `string`<a id="cursor-string"></a>

##### limit: `number`<a id="limit-number"></a>

##### postedAtStart: `string`<a id="postedatstart-string"></a>

 Shows only transactions with a `posted_at_date` on or after this date-time. This parameter is the date-time notation as defined by [RFC 3339, section 5.6](https://tools.ietf.org/html/rfc3339#section-5.6) 

#### 🔄 Return<a id="🔄-return"></a>

[PageCashTransaction](./models/page-cash-transaction.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/v2/transactions/cash/{id}` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


## Author<a id="author"></a>
This TypeScript package is automatically generated by [Konfig](https://konfigthis.com)
