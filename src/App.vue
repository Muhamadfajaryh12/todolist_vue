<script setup>
import { onMounted, ref } from 'vue'
import TodoItem from './components/TodoItem.vue'
import TodosAPI from './api/todos'
import TodoInput from './components/TodoInput.vue'
const todos = ref([])

const fetchTodo = () => {
  TodosAPI.GetTodos()
    .then(response => {
      todos.value = response
    })
    .catch(error => {
      console.log(error)
    })
}

const submitTodo = async title => {
  const response = await TodosAPI.PostTodos(title)
  todos.value.push(response.data.data[0])
}

const updateTodo = async id => {
  const response = await TodosAPI.UpdateTodos(id)
  const index = todos.value.findIndex(
    item => item.id == response.data.data[0].id,
  )
  if (index !== -1) {
    todos.value[index] = response.data.data[0]
  }
}

const deleteTodo = async id => {
  const response = await TodosAPI.DeleteTodos(id)
  todos.value = todos.value.filter(item => item.id != response.data.data)
}

onMounted(() => {
  fetchTodo()
})
</script>
<template>
  <header></header>

  <main class="flex justify-center">
    <div class="">
      <TodoInput
        :placeholder="`Masukan Judul`"
        :type="`text`"
        :handleSubmit="submitTodo"
      />
      <TodoItem
        v-for="todo in todos"
        :key="todo.id"
        :todo="todo"
        :handleUpdate="updateTodo"
        :handleDelete="deleteTodo"
      />
    </div>
  </main>
</template>
