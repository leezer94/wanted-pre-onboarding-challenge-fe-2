// @ts-check

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

const todos = [
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
 * @async
 * @function createTodo
 * @param {string} content  - A string param
 * @param {string} category - A string param
 * @param {string[] | string } [tags = undefined] - An optional param with String or Array of strings
 * @returns {Promise<Todo | void>} - returns Todo ( 내부 로직 없이 void )
 * @throws {Error} - throws Error when failed to request
 */

const createTodo = async (content, category, tags) => {};

/**
 * <b>
 * 모든 할 일을 조회할 수 있다.
 * </b>
 *
 * @async
 * @function getTodos
 * @return {Promise<Todo[] | void>} - returns Array of Todo ( 내부 로직 없이 void )
 * @throws {Error} - throws Error when failed to request
 */

const getTodos = async () => {};

/**
 * <b>
 * ID를 기반으로 특정 할 일을 조회할 수 있다.
 * </b>
 *
 * @async
 * @function getTodoById
 * @param {number} id - A Number param
 * @returns {Promise<Todo | void>} - returns Todo ( 내부 로직 없이 void )
 * @throws {Error}
 *
 */

/**
 *
 * @param {number} id - A Number param
 */

const getTodoById = async (id) => {};

/**
 * <pre>
 * <b>
 * ID를 제외한 모든 속성을 수정할 수 있다.
 * 특정 할 일의 특정 태그를 수정할 수 있다.
 * </b>
 * </pre>
 *
 * @async
 * @function updateTodo
 * @param {number} id - A Number param
 * @param {string} [content] - A optional String param
 * @param {boolean} [completed] - A optional Boolean param
 * @param {string} [category] - A optional string param
 * @param {string | string[]} [tags] - A optional param with string or Array of strings
 * @returns {Promise<Todo | void>} - returns A modified Todo ( 내부 로직 없이 void )
 * @throws {Error}
 */

const updateTodo = async (id, content, completed, category, tags) => {};

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
 * @async
 * @function deleteTodo
 * @param {number} [id] - A Number param
 * @param {string | string[]} [tags]
 * @returns {Promise<Todo | Todo[] | void>}
 * @throws {Error}
 */
const deleteTodo = async (id, tags) => {};
