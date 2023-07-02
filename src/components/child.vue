<script setup>
import { ref } from 'vue';

const text=ref('')
const emits=defineEmits(['bigger'])
const childBigger=()=>{
    emits('bigger',text.value)
}
</script>

<template>
    <h2>子组件</h2>
    {{ text }}
<input type="text" v-model="text" @input="childBigger">
</template>