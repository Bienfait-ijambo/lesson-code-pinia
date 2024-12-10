<script setup>
import { inject } from 'vue'

const counterStore = inject('counterStore')
</script>

<template>
  <div>
    <h1>this is counter3</h1>

    this is the val of counter3 : {{ counterStore.count }}
  </div>
</template>
