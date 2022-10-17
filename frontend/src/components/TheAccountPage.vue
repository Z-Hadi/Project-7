<template>
  <form
    @submit.prevent="submit"
    ref="form"
    class="col-6 offset-3 col-sm-4 offset-sm-4 mb-5"
  >
    <div>
      <h4 class="my-4">Hello {{ firstName }} {{lastName}} {{emailAddress}},</h4>

      <ul class="list-group">
        <label class="form-label"> First Name</label>
        <input
          class="form-control bg-white"
          type="text"
          minlength="2"
          maxlength="40"
          v-model="inputFirstName"
          id="titleId"
        />

        <label class="form-label"> Last Name</label>
        <input
          class="form-control bg-white"
          type="text"
          minlength="2"
          maxlength="40"
          v-model="inputLastName"
          id="titleId"
        />

        <label class="form-label"> Email Address</label>
        <input
          class="form-control bg-white"
          type="text"
          minlength="2"
          maxlength="40"
          v-model="inputEmailAddress"
          id="titleId"
        />

       
        <label class="form-label">Password</label>
        <input
          class="form-control bg-white"
          type="text"
          minlength="8"
          maxlength="40"
          v-model="inputPassword"
          placeholder="********"
        />

        <div class="d-flex justify-content-center">
          <button
            type="button"
            @click="deleteUserAccount"
            class="py-2 rounded-pill btn-danger px-4 me-5"
          >
            Delete Account
          </button>
          <button type="submit" class="py-2 rounded-pill btn-warning px-4">
            Change Details
          </button>
        </div>
      </ul>
    </div>
  </form>
</template>

<script>
import Cookies from "js-cookie";

export default {
  data() {
    return {
      inputFirstName: this.firstName,
      inputLastName: this.lastName,
      inputEmailAddress: this.emailAddress,
      inputPassword: "",
    }
  },

  props: {
    firstName: String,
    lastName: String,
    emailAddress: String,
  },

  methods: {
    deleteUserAccount() {
      const newToken = Cookies.get("token");
      const user = JSON.parse(localStorage.getItem('user'))
      fetch("http://localhost:8000/api/auth/"+ user.userId, {
        method: "DELETE",
        headers: {
          Authorization: "Bearer " + newToken,
        },
      }).then(() => {
        this.$router.push("/LoginSignUp");
              }).catch((error) => {
                console.error(error);
              }
              )
    },
  },
};
</script>
