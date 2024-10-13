<script setup>
import { ref } from 'vue'

const props = defineProps({
  placeholder: {
    type: String,
    required: true,
  },
  type: {
    type: String,
  },
  handleSubmit: {
    type: Function,
    required: true,
  },
})
const { placeholder, type, handleSubmit } = props

const titleValue = ref('')

const submitTodo = () => {
  handleSubmit(titleValue.value)
  console.log(titleValue)
}
</script>
<template>
  <div class="m-2 flex">
    <input
      :type="type"
      :placeholder="placeholder"
      v-model="titleValue"
      class="p-2 border-2 w-full"
    />
    <button
      class="bg-blue-300 text-white font-semibold p-2 rounded-sm"
      @click="submitTodo"
    >
      Simpan
    </button>
  </div>
</template>
