<template>
  <div>
    <CreatePost @create="createPost" />

    <div v-for="(post, index) in posts" :key="index">
      <ThePostPage
        :createdAt="post.createdAt"
        :title="post.title"
        :body="post.body"
        :imageUrl="post.imageUrl"
        :firstName="post.User?.firstName"
        :lastName="post.User?.lastName"
        :postId="post.postId"
      />
    </div>
  </div>
</template>

<script>
// @ is an alias to /src

import ThePostPage from "@/components/ThePostPage.vue";
import CreatePost from "../components/CreatePost.vue";
import Cookies from "js-cookie";

export default {
  components: {
    ThePostPage,
    CreatePost,
  },
  data: () => ({
    previewImage: "",

    posts: [],
  }),
  mounted() {
    const newToken = Cookies.get("token");
    fetch("http://localhost:8000/api/posts/", {
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + newToken,
      },
    })
      .then((response) => {
        return response.json();
      })
      .then((posts) => {
        this.posts = posts;
      })
      .catch((error) => {
        console.log(error);
      });
  },

  methods: {
    createPost(payload) {
      this.posts.unshift(payload);
    },
  },
};
</script>