<template>
  <div class="vh-100 d-flex justify-content-center align-items-center">
    <template v-if="error">
      <div class="alert alert-danger  " >
        Unauthorized !! Please check your credentials and try again
      </div>
    </template>
    <template v-if="logInRequest">
      <LoginPage
        @create-new="(logInRequest = false), (signUpRequest = true)"
        @error="showError"
      />
    </template>
    <tempalte v-if="signUpRequest">
      <SignUpPage
        @sign-in="(logInRequest = true), (signUpRequest = false)"
        @error="showError2"
      />
    </tempalte>
  </div>
</template>

<script>
// @ is an alias to /src
import LoginPage from "@/components/LoginPage.vue";
import SignUpPage from "@/components/SignUpPage.vue";
export default {
  name: "LoginSignUpView",
  components: {
    LoginPage,
    SignUpPage,
  },

  data: () => ({
    error: "",
    logInRequest: true,
    signUpRequest: false,
  }),

  methods: {
    showError(message) {
      this.error = message;
 
    },
    
  },
};
</script>
