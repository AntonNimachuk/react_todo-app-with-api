/* eslint-disable */

import { TodoItem } from '../TodoItem'
import type { Todo } from '../../types/Todo';

type Props = {
  todos : (Todo[]);
  onDelete : ( id: number) => void;
  loadingIds : number[]
  handleUpdate? : ( id: number, todoData?: Partial<Todo>) => void;
}

export const TodoList: React.FC<Props> = ({ todos, onDelete, loadingIds, handleUpdate }) => (
  <>
    {todos.map(todo=> (
      <TodoItem
        key={todo.id}
        todo={todo}
        onDelete={onDelete}
        isLoading={loadingIds.includes(todo.id)}
        handleUpdate={handleUpdate}
      />
    ))}
  </>
);
