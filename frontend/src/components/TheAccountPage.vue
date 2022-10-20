<template>
  <form
    @submit.prevent="submit"
    ref="form"
    class="col-6 offset-3 col-sm-4 offset-sm-4 mb-5"
  >
    <div>
      <h4 class="my-4">Hello {{ firstName }},</h4>
      <ul class="list-group">
        <label class="form-label"> First Name</label>
        <li class="form-control bg-white mb-3" type="text" id="titleId">
          {{ firstName }}
        </li>

        <label class="form-label"> Last Name</label>
        <li class="form-control bg-white mb-3" type="text" id="titleId">
          {{ lastName }}
        </li>

        <label class="form-label"> Email Address</label>
        <li class="form-control bg-white mb-3" type="text" id="titleId">
          {{ emailAddress }}
        </li>

        <div class="d-flex justify-content-center">
          <button
            type="button"
            @click="deleteUserAccount"
            class="py-2 rounded-pill btn-danger px-4 me-5"
          >
            Delete Account
          </button>
        </div>
      </ul>
    </div>
  </form>
</template>

<script>
import Cookies from "js-cookie";

export default {
  props: {
    firstName: String,
    lastName: String,
    emailAddress: String,
  },

  methods: {
    deleteUserAccount() {
      const newToken = Cookies.get("token");
      const user = JSON.parse(localStorage.getItem("user"));
      fetch("http://localhost:8000/api/auth/" + user.userId, {
        method: "DELETE",
        headers: {
          Authorization: "Bearer " + newToken,
        },
      })
        .then((response) => {
          if (response.ok) {
            return response.json();
          }
          throw response;
        })
        .then(() => {
          setTimeout(() => { alert("User's account was deleted successfully"); }, 1);
          this.$router.push("/LoginSignUp");
        })
        .catch((error) => {
          this.$emit("error", error.statusText);
        });
    },
  },
};
</script>
