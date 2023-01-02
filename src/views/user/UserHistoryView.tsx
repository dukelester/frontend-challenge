import { ReactElement } from 'react';

import { UserHistory } from './../../components/history/UserHistory';

const dummyData = [
  {
    date: '2022-01-01',
    location: 'San Francisco',
    distance: 10,
  },
  {
    date: '2022-01-02',
    location: 'Los Angeles',
    distance: 20,
  },
  // ...
];

export const UserHistoryView = (): ReactElement => {
  return <UserHistory trips={dummyData} />;
};
