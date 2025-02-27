import { atom } from 'jotai';

import getTodoItems from '../../services/getTodoItems';

const itemData = atom(async (get) => {
  const res = await getTodoItems();

  return res.data[0];
});

export default itemData;
