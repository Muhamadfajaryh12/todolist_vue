import axios from 'axios'

const TodosAPI = (() => {
  const base_url = 'http://localhost:3000/api/todos'
  const GetTodos = async () => {
    try {
      const response = await axios.get(base_url)
      return response.data
    } catch (error) {
      console.error('Error fetching todos:', error.message)
    }
  }

  const PostTodos = async title => {
    console.log(title)
    try {
      const response = await axios.post(base_url, {
        title,
      })
      console.log(response)
      return response
    } catch (error) {
      console.log(error)
    }
  }

  const UpdateTodos = async id => {
    try {
      const response = await axios.put(`${base_url}/${id}`)
      console.log(response)
      return response
    } catch (error) {
      console.log(error)
    }
  }

  const DeleteTodos = async id => {
    try {
      const response = await axios.delete(`${base_url}/${id}`)
      console.log(response)
      return response
    } catch (error) {
      console.log(error)
    }
  }
  return {
    GetTodos,
    PostTodos,
    UpdateTodos,
    DeleteTodos,
  }
})()

export default TodosAPI
