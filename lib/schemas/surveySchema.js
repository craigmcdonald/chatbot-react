export default [
  {
    key: 'id',
    types: ['string', 'number'],
    required: true,
  },
  {
    key: 'survey',
    types: ['any'],
    required: true,
  },
  {
    key: 'autoClose',
    types: ['number'],
    required: false,
  },
  {
    key: 'avatar',
    types: ['string'],
    required: false,
  },
  {
    key: 'replace',
    types: ['boolean'],
    required: false,
  },
  {
    key: 'waitAction',
    types: ['boolean'],
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
