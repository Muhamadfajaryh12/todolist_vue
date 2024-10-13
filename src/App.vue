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
  console.log(response)
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
      <TodoItem v-for="todo in todos" :key="todo.id" :todo="todo" />
    </div>
  </main>
</template>
