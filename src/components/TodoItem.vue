<script setup>
import TodoStatus from './TodoStatus.vue'

const props = defineProps({
  todo: {
    type: Object,
    required: true,
  },
  handleUpdate: {
    type: Function,
    required: true,
  },
  handleDelete: {
    type: Function,
  },
})

const { todo, handleUpdate } = props
</script>
<template>
  <div class="flex gap-2 my-2">
    <div class="flex justify-between w-96 border-2 p-2 rounded-sm">
      <h6 class="font-bold">{{ todo.title }}</h6>
      <TodoStatus :todo="todo" />
    </div>
    <button
      class="bg-green-500 rounded-md w-16 text-white"
      @click="handleUpdate(todo.id)"
    >
      Done
    </button>
    <button
      class="bg-red-500 rounded-md w-16 text-white"
      @click="handleDelete(todo.id)"
    >
      Delete
    </button>
  </div>
</template>
