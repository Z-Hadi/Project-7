<template>

  <div>
    <CreatePost @create="createPost" />
  </div>
  <div v-for="(post, index) in posts" :key="index">

    <ThePostPage :author="post.author" :timestamp="post.timestamp" :title="post.title" :body="post.body" :seen="post.seen"/>
   

  </div>
</template>

<script>

// @ is an alias to /src

import ThePostPage from '@/components/ThePostPage.vue'
import CreatePost from '../components/CreatePost.vue'

export default {

  components: {
    ThePostPage,
    CreatePost
  },
  data: () => ({

    previewImage: '',

    posts: [    ],


  }),
  methods: {

    createPost(payload) {

      this.posts.unshift(payload)

    }
  }
}

</script>