<script setup>
import { onMounted, ref } from 'vue'
import TodoItem from './components/TodoItem.vue'
import TodosAPI from './api/todos'
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

onMounted(() => {
  fetchTodo()
})
</script>
<template>
  <header></header>

  <main class="flex justify-center">
    <div class="">
      <TodoItem v-for="todo in todos" :key="todo.id" :todo="todo" />
    </div>
  </main>
</template>
