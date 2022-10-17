<template>
  <div class="col-6 offset-3 col-sm-4 offset-sm-4 mb-5">
    <div class="card">
      <header class="card-header bg-white border-0" style="height: 35px">
        <div class="d-flex justify-content-start">
          <span class="card-text text-muted me-2"
            ><small>Posted By: {{ firstName }} {{ lastName }} </small></span
          >

          <p class="card-text">
            <small id="time" class="text-muted ms-4">
              @ {{ formatedTime }}
            </small>
          </p>
        </div>
      </header>
      <div class="card-body">
        <h3 class="card-title mb-4">{{ title }}</h3>

        <div v-if="body" class="card-text fs-5">{{ body }}</div>
        <img v-if="imageUrl" class="card-img-top" :src="imageUrl" />
        <div class="mb-3">
          <ul
            class="nav justify-content-center shadow-none mt-5 bg-light rounded"
          >
            <li
              class="nav-item d-flex justify-content-between align-items-center"
              @click="Toggle"
            >
              <span v-if="hasSeen == true" style="color: blue"
                ><font-awesome-icon icon="fa-solid fa-eye"
              /></span>
              <span v-if="hasSeen == false" style="color: black"
                ><font-awesome-icon icon="fa-solid fa-eye-slash"
              /></span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

import Cookies from "js-cookie";
export default {
  props: {
    createdAt: String,
    title: String,
    body: String,
    imageUrl: String,
    firstName: String,
    lastName: String,
    postId: Number,
  },
  data(){
    return{
    hasSeen: false,

    }
  },
  methods: {
  Toggle() {

    // if (hasSeen === true) {
    //     hasSeen=false
    //   } else {
    //     hasSeen=true
    //   }


      const newToken = Cookies.get("token");
      const user = JSON.parse(localStorage.getItem("user"));
      fetch("http://localhost:8000/api/seen", {
        method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + newToken,
      },
      body: JSON.stringify({
          userId: user.userId,
          postId: this.postId,
      })})
      .then(response=>{
      return response.json()
          })
          .then(()=>{
          this.hasSeen= true })
              .catch((error) => {
          console.log(error);
        })
    }},

  mounted() {
    const newToken = Cookies.get("token");
    const { userId } = JSON.parse(localStorage.getItem("user"));
    fetch(`http://localhost:8000/api/seen/${this.postId}/${userId}`, {
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + newToken,
      },

    })
    .then(response=>{
return response.json()
    })
    .then(hasSeen=>{
      this.hasSeen= hasSeen

    })
  },
  computed: {
    formatedTime() {
      const timestamp = Date.parse(this.createdAt);

      const date = new Date(timestamp);
      return date.toUTCString();
    },
  },
}
</script>
