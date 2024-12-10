import { computed, ref } from 'vue'
import { defineStore } from 'pinia'

export const usePostStor2 = defineStore('post2', () => {
  const posts = ref([])
  const sharedPost = ref({})
  const countPost = computed(() => posts.value.length)

  function sharePost(id) {
    const post = this.posts.filter((post) => post.id === id)
    if (post.length > 0) {
      sharedPost.value = post[0]
    }
  }
  async function fetchPostData() {
    const res = await fetch('http://127.0.0.1:8000/api/posts')
    const data = await res.json()
    posts.value = data
    console.log(data)
  }

  return {
    posts,
    sharedPost,
    countPost,
    sharePost,
    fetchPostData,
  }
})
