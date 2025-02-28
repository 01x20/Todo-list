import { Suspense } from 'react';

import Contents from '../components/Contents';
import Title from '../components/Title';

function TodoListPage() {
  return (
    <Suspense fallback={<div>loading...</div>}>
      <Title />
      <Contents />
    </Suspense>
  );
}

export default TodoListPage;
