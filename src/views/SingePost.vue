<template>
  <div>
    <h1>
      {{ appName }}
    </h1>
    {{ sharedPost }}
  </div>
</template>

<script>
import {} from '../stores/counter2'
import { usePostStore } from '../stores/post'
import { mapStores, mapState, mapActions } from 'pinia'
export default {
  data() {
    return {
      appName: 'Single-post',
    }
  },
  computed: {
    ...mapStores(usePostStore),
    ...mapState(usePostStore, ['posts', 'countPost', 'sharedPost']),

    appNameLength() {
      return this.appName.length
    },
  },
  methods: {
    ...mapActions(usePostStore, ['fetchPostData', 'sharePost']),

    incrementAgain() {
      this.increment()
    },
  },
  async mounted() {
    // this.increment()
    // this.fetchPostData()
  },
}
</script>
