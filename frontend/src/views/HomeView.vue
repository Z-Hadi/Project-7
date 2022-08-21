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

    posts: [
      {
        author: 'Zaid Hadi1124',
        time: '22/06/2022',
        title: 'This is a post about paraghraph',
        body: 'A paragraph is a series of sentences that are organized and coherent, and are all related to a single topic. Almost every piece of writing you do that is longer than a few sentences should be organized into paragraphs. This is because paragraphs show a reader where the subdivisions of an essay begin and end, and thus help the reader see the organization of the essay and grasp its main points. Paragraphs can contain many different kinds of information. A paragraph could contain a series of brief examples or a single long illustration of a general point. It might describe a place, character, or process; narrate a series of events; compare or contrast two or more things; classify items into categories; or describe causes and effects. Regardless of the kind of information they contain, all paragraphs share certain characteristics. One of the most important of these is a topic sentence.',
        seen: '15'
      },
      {
        author: 'Zaid',
        time: '22/06/2022',
        title: 'Post-2',
        body: 'this the body for post one',
        seen: '15'
      },
      {
        author: 'Zaid',
        time: '22/06/2022',
        title: 'Post-3',
        body: 'this the body for post one',
        seen: '15'
      },
      {
        author: 'Zaid',
        time: '22/06/2022',
        title: 'Post-4',
        body: 'this the body for post one',
        seen: '15'
      }
    ],


  }),
  methods: {

    createPost(payload) {

      this.posts.unshift(payload)

    }
  }
}

</script>