<script setup>
const props = defineProps({
  todo: {
    type: Object,
    required: true,
  },
})

const { status } = props.todo
</script>
<template>
  <div :class="['font-bold', status === 1 ? 'text-green-500' : 'text-red-400']">
    {{ status == 1 ? 'Done' : 'Progress' }}
  </div>
</template>
