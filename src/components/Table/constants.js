export const DEFAULT_AMOUNT_EL = 20;
export const DEFAULT_CURRENT_PAGE = 1;

export const SortValue = {
  asc: 'asc',
  desc: 'desc',
};

export const ArrowType = {
  up: 'north',
  down: 'south',
};

export const TableColumsConfig = [
  {
    label: 'Name',
    key: 'name',
    sortable: true,
  },
  {
    label: 'Iso',
    key: 'iso3',
    sortable: true,
  },
  {
    label: 'Phone сode',
    key: 'phone_code',
    sortable: false,
  },
  {
    label: 'Currency',
    key: 'currency',
    sortable: false,
  },
  {
    label: 'Capital',
    key: 'capital',
    sortable: false,
  },
];
