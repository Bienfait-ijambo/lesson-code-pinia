import { defineStore } from 'pinia'

export const usePostStore = defineStore('post', {
  state: () => ({
    posts: [],
    sharedPost: {},
  }),
  //computed property
  getters: {
    // double:(state)=>state.count*2
    countPost: (state) => state.posts.length,
  },
  //methods
  actions: {
    sharePost(id) {
      const post = this.posts.filter((post) => post.id === id)
      if (post.length > 0) {
        this.sharedPost = post[0]
      }
    },
    async fetchPostData() {
      const res = await fetch('http://127.0.0.1:8000/api/posts')
      const data = await res.json()
      this.posts = data
      console.log(data)
    },
  },
})
