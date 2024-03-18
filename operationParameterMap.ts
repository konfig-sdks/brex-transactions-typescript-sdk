type Parameter = {
    name: string
}
type Entry = {
    parameters: Parameter[]
}
export const operationParameterMap: Record<string, Entry> = {
    '/v2/accounts/cash/{id}-GET': {
        parameters: [
            {
                name: 'id'
            },
        ]
    },
    '/v2/accounts/card-GET': {
        parameters: [
        ]
    },
    '/v2/accounts/cash-GET': {
        parameters: [
        ]
    },
    '/v2/accounts/cash/{id}/statements-GET': {
        parameters: [
            {
                name: 'id'
            },
            {
                name: 'cursor'
            },
            {
                name: 'limit'
            },
        ]
    },
    '/v2/accounts/card/primary/statements-GET': {
        parameters: [
            {
                name: 'cursor'
            },
            {
                name: 'limit'
            },
        ]
    },
    '/v2/accounts/cash/primary-GET': {
        parameters: [
        ]
    },
    '/v2/transactions/card/primary-GET': {
        parameters: [
            {
                name: 'cursor'
            },
            {
                name: 'limit'
            },
            {
                name: 'user_ids'
            },
            {
                name: 'posted_at_start'
            },
            {
                name: 'expand[]'
            },
        ]
    },
    '/v2/transactions/cash/{id}-GET': {
        parameters: [
            {
                name: 'id'
            },
            {
                name: 'cursor'
            },
            {
                name: 'limit'
            },
            {
                name: 'posted_at_start'
            },
        ]
    },
}