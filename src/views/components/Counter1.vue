<script setup>
import { inject } from 'vue'
import Counter2 from './Counter2.vue'

const counterStore = inject('counterStore')
</script>

<template>
  <div>
    <h1>this is counter1</h1>
    counter1 val is: {{ counterStore.count }}
    <br />

    <Counter2 />
  </div>
</template>
