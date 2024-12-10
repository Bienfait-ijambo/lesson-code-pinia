<template>
  <div>
    <h1>{{ appName }} - {{ appNameLength }}</h1>

    <div>count : {{ count }} - {{ double }}</div>

    <button @click="increment">increment</button>
    <br />
    <br />
    <ul>
      <li>
        <RouterLink to="/"> Posts </RouterLink>
      </li>
      <li>
        <RouterLink to="/single-post"> Single post </RouterLink>
      </li>
    </ul>
    <br />

    countPost :{{ countPost }}
    <div v-for="post in posts" :key="post.id">
      <RouterLink>
        {{ post?.title }}
      </RouterLink>
      <p>
        {{ post?.content }}

        <button @click="sharePost(post?.id)">share</button>
      </p>
    </div>
  </div>
</template>

<script>
import { useCounterStore } from '../stores/counter2'
import { usePostStore } from '../stores/post'
import { mapStores, mapState, mapActions } from 'pinia'
export default {
  data() {
    return {
      appName: 'Posts',
    }
  },
  computed: {
    ...mapStores(useCounterStore, usePostStore),
    ...mapState(useCounterStore, ['count', 'double']),
    ...mapState(usePostStore, ['posts', 'countPost']),

    appNameLength() {
      return this.appName.length
    },
  },
  methods: {
    ...mapActions(useCounterStore, ['increment']),
    ...mapActions(usePostStore, ['fetchPostData', 'sharePost']),

    incrementAgain() {
      this.increment()
    },
  },
  async mounted() {
    // this.increment()
    this.fetchPostData()
  },
}
</script>
