// @ts-check

interface Todo {
  id: number;
  content: string;
  completed: boolean;
  category: string;
  tags?: string | Array<string>;
}

// interface
interface TodoFunctionType {
  CreateTodo: (
    content: string,
    category: string,
    tags?: string | Array<string>,
  ) => void;
  GetTodos: () => void;
  GetTodoById: (id: number) => void;
  UpdateTodo: ({
    id,
    content,
    completed,
    category,
    tags,
  }: {
    id: number;
    content?: string;
    completed?: boolean;
    category?: string;
    tags?: string | Array<string>;
  }) => void;
  DeleteTodoById: (id: number) => void;
  DeleteTagsById: (id: number, tags?: string | Array<string>) => void;
  DeleteAllTodos: () => void;
}

/**
 * Todo object type definition
 * @typedef {Object} Todo
 * @property {number} id -  Id
 * @property {string} content -  Content
 * @property {boolean}  [completed = false] -  Status
 * @property {string} category - Category
 * @property {string[] | string | undefined} [tags] - Tags
 */

/**
 * @type {Todo[]}
 */

const todos: Array<Todo> = [
  {
    id: 1,
    content: 'content',
    completed: false,
    category: 'TODO',
    tags: 'optional',
  },
  {
    id: 2,
    content: 'content2',
    completed: true,
    category: 'DONE',
    tags: ['Urgent', 'In-Hurry'],
  },
];

/**
 * <b>
 * 할 일을 내용없이 추가할 수 없다.
 * </b>
 *
 * @function createTodo
 * @param {string} content  - A string param
 * @param {string} category - A string param
 * @param {string[] | string } [tags = undefined] - An optional param with String or Array of strings
 * @returns {void} - returns Todo ( 내부 로직 없이 void )
 * @throws {Error} - throws Error when failed to request
 */

const createTodo: TodoFunctionType['CreateTodo'] = (
  content,
  category,
  tags,
) => {
  return;
};

createTodo('content', 'category');

/**
 * <b>
 * 모든 할 일을 조회할 수 있다.
 * </b>
 *
 * @function getTodos
 * @return {void} - returns Array of Todo ( 내부 로직 없이 void )
 * @throws {Error} - throws Error when failed to request
 */

const getTodos: TodoFunctionType['GetTodos'] = () => {
  return;
};

getTodos();

/**
 * <b>
 * ID를 기반으로 특정 할 일을 조회할 수 있다.
 * </b>
 *
 * @function getTodoById
 * @param {number} id - A Number param
 * @returns {void} - returns Todo ( 내부 로직 없이 void )
 * @throws {Error}
 *
 */

/**
 *
 * @param {number} id - A Number param
 */

const getTodoById: TodoFunctionType['GetTodoById'] = (id) => {
  return;
};

getTodoById(1);

/**
 * <pre>
 * <b>
 * ID를 제외한 모든 속성을 수정할 수 있다.
 * 특정 할 일의 특정 태그를 수정할 수 있다.
 * </b>
 * </pre>
 *
 * @function updateTodo
 * @param {Todo} todo - A Object param
 * @param {number} todo.id - A Number param
 * @param {string} todo.[content] - A optional String param
 * @param {boolean} todo.[completed] - A optional Boolean param
 * @param {string} todo.[category] - A optional string param
 * @param {string | string[]} todo.[tags] - A optional param with string or Array of strings
 * @returns {void} - returns A modified Todo ( 내부 로직 없이 void )
 * @throws {Error}
 */

const updateTodo: TodoFunctionType['UpdateTodo'] = ({
  id,
  content,
  completed,
  category,
  tags,
}) => {
  return;
};

// 할 일의 내용만 변경
updateTodo({ id: 1, content: 'content' });

// 할 일의 completed 상태만 변경
updateTodo({ id: 1, completed: true });

// 할 일의 태그만 변경
updateTodo({ id: 1, tags: 'newTag' });
updateTodo({ id: 1, tags: ['tag1', 'tag2'] });

// 할 일의 카테고리만 변경
updateTodo({ id: 1, category: 'category' });

/**
 * <pre>
 * <b>
 * ID를 기반으로 특정 할 일을 삭제할 수 있다.
 * 모든 할 일을 제거할 수 있다.
 * 특정 할 일의 특정 태그를 삭제할 수 있다.
 * 특정 할 일의 모든 태그를 제거할 수 있다.
 * </b>
 * </pre>
 *
 * @function deleteTodo
 * @param {number} [id] - A Number param
 * @param {string | string[]} [tags]
 * @returns {void}
 * @throws {Error}
 */

const deleteTodoById: TodoFunctionType['DeleteTodoById'] = (id) => {
  return;
};

const deleteTagsById: TodoFunctionType['DeleteTagsById'] = (id, tags) => {
  return;
};

const deleteAllTodos: TodoFunctionType['DeleteAllTodos'] = () => {
  return;
};

// Id 를 기반으로 할 일 삭제
deleteTodoById(3);

// 특정 태그만 삭제한다.
deleteTagsById(3, 'tag-to-be-deleted');

// 모든 태그를 삭제한다.

deleteTagsById(3);

// 모든 할 일을 삭제한다.

deleteAllTodos();
