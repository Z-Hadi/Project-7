<template>

  <div>
    <CreatePost @create="createPost" />
  </div>
  <div v-for="(post, index) in posts" :key="index">

    <ThePostPage  :timestamp="post.timestamp" :title="post.title" :body="post.body" :seen="post.seen"/>
   

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
//   mounted () {

//     getPosts () {
//       const newToken = Cookies.get('token')
//       fetch("http://localhost:8000/api/posts/", {
//         method: "get",
//         credentials: 'include',
//          headers: {
//           'Content-Type': 'application/json',
//           'Authorization': 'Bearer ' + newToken
//         }
    
//       }).then((response) => {
//        return response.json()


//       })
//         .catch(error => {
//         console.log(error)
//       })
   
// }
//   }

 

  methods: {

    createPost(payload) {

      this.posts.unshift(payload)

    }
  }
}

</script>