<script setup>
import { useCounterStore } from '@/stores/counter'
import { usePostStor2 } from '@/stores/post2'
import { storeToRefs } from 'pinia'
import { onMounted, provide, reactive, toRef, toRefs } from 'vue'
import Counter1 from './components/Counter1.vue'

const counterStore = useCounterStore()
const { count, doubleCount } = storeToRefs(counterStore)

const countVal = toRef(counterStore, 'count')

const userInput = reactive({
  name: 'ben',
  gender: 'male',
})

const { name, gender } = toRefs(userInput)

function updateUserName() {
  userInput.name = 'john'

  console.log(counterStore.secret)
  console.log(counterStore.hasError)
}

// const {increment,decrement}=counterStore

const postStore = usePostStor2()

provide('counterStore', counterStore)

onMounted(async () => {
  postStore.fetchPostData()
})
</script>

<template>
  <div>
    userName: {{ name }}
    <button @click="updateUserName">update username</button>
    <Counter1 />

    <!-- <h1>Home page</h1>
        <div>
            {{ count }}
        </div>
        double : {{ doubleCount }} -->

    <button @click="counterStore.increment">increment</button>
    <button @click="counterStore.decrement">decrement</button>

    <!-- posts: {{ postStore.posts }} -->
  </div>
</template>
