import { atom } from 'jotai';

import getTodoItems from '../../services/getTodoItems';

const itemLengthState = atom(async (get) => {
  const res = await getTodoItems();

  return res.data[0]?.items?.length ?? 0;
});

export default itemLengthState;
