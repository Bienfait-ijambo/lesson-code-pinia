<script setup>
import { inject } from 'vue'
import counter3 from './counter3.vue'

const counterStore = inject('counterStore')
</script>

<template>
  <div>
    <h1>this is counter2</h1>

    this is the val of counter2 : {{ counterStore.count }}

    <counter3 />
  </div>
</template>
