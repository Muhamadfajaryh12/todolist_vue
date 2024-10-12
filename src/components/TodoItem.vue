<script setup>
import TodoStatus from './TodoStatus.vue'

const props = defineProps({
  todo: {
    type: Object,
    required: true,
  },
})

const { title } = props.todo
</script>
<template>
  <div class="flex justify-between w-96 border-2 my-2 p-2 rounded-sm">
    <h6 class="font-bold">{{ title }}</h6>
    <TodoStatus :todo="todo" />
  </div>
</template>
