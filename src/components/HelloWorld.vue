<template>
  <h1>父组件</h1>
  {{ text }}
  <child @bigger="fatherBigger"></child>
  <template v-for="(item,index) in data.dataSource">
    {{ item }}
  </template>
  <button @click="delete1">删除</button>
</template>

<script setup>
import { reactive, ref } from 'vue';
import child from './child.vue'

const delete1=()=>{
  // items.value.pop()
  data.dataSource.pop()
}

const items=ref([
  1,2,3,4,5
])
const data=reactive({
  dataSource:[
    1,2,3,4
  ]
})


const text=ref('')
const fatherBigger=(text1)=>{
  console.log(text1)
  text=text1
}
</script>
