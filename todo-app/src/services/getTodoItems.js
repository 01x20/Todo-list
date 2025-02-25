import mainApi from './apis/mainApi';

function getTodoItems() {
  return mainApi.get(`/todos`);
}

export default getTodoItems;
