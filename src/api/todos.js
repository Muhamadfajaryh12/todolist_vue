import axios from 'axios'

const TodosAPI = (() => {
  const GetTodos = async () => {
    try {
      const response = await axios.get('http://localhost:3000/api/todos')
      return response.data
    } catch (error) {
      console.error('Error fetching todos:', error.message)
    }
  }

  return {
    GetTodos,
  }
})()

export default TodosAPI
