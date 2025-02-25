import { atom } from 'jotai';

import getTodoItems from '../../services/getTodoItems';

const itemState = atom(async () => {
  const res = await getTodoItems();

  return res.data[0];
});

export default itemState;
