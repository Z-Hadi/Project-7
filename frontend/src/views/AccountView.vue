<template>
  <template v-if="error">
    <div class="alert alert-danger text-center ">
      Can Not Delete This Account !!
    </div>
  </template>
  <div>
    <TheAccountPage
    @error="showError"
      :firstName="firstName"
      :lastName="lastName"
      :emailAddress="emailAddress"
    >
    </TheAccountPage>
  </div>
</template>

<script>
import TheAccountPage from "@/components/TheAccountPage.vue";
import { isJwtExpired } from "jwt-check-expiration";
import Cookies from "js-cookie";

export default {
  name: "AccountView",
  components: {
    TheAccountPage,
  },
  data: () => ({
    error: "",
    firstName: "",
    lastName: "",
    emailAddress: "",
  }),
  methods: {
    showError(message) {
      this.error = message;
    },
  },

  mounted() {
    const newToken = Cookies.get("token");
    if (!newToken || isJwtExpired(newToken)) {
      Cookies.remove("token");
      localStorage.clear("user");
      this.$router.push("/LoginSignUp");
    }
    if (newToken && !isJwtExpired(newToken)) {
      const user = JSON.parse(localStorage.getItem("user"));
      this.firstName = user.firstName;
      this.lastName = user.lastName;
      this.emailAddress = user.emailAddress;
    }
  },

};
</script>
