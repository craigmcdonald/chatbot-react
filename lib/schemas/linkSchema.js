export default [
  {
    key: 'id',
    types: ['string', 'number'],
    required: true,
  },
  {
    key: 'linkUrl',
    types: ['string'],
    required: true,
  },
  {
    key: 'linkText',
    types: ['string'],
    required: true,
  },
  {
    key: 'icon',
    types: ['string'],
    required: false,
  },
  {
    key: 'resetStore',
    types: ['boolean'],
    required: false,
  },
  {
    key: 'storeId',
    types: ['string'],
    required: false,
  },
  {
    key: 'trigger',
    types: ['string', 'number', 'function'],
    required: false,
  },
  {
    key: 'delay',
    types: ['number'],
    required: false,
  },
  {
    key: 'end',
    types: ['boolean'],
    required: false,
  },
  {
    key: 'placeholder',
    types: ['string'],
    required: false,
  },
  {
    key: 'hideInput',
    types: ['boolean'],
    required: false,
  },
  {
    key: 'inputAttributes',
    types: ['object'],
    required: false,
  },
  {
    key: 'metadata',
    types: ['object'],
    required: false,
  },
];
