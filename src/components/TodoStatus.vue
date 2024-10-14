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
  <div
    :class="['font-bold', status === 2 ? 'text-green-500' : 'text-orange-400']"
  >
    {{ status == 2 ? 'Done' : 'Progress' }}
  </div>
</template>
