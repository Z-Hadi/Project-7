/*<template>
  <div class="vh-100 d-flex justify-content-center align-items-center ">
    <template v-if="logInRequest">
    <LoginPage />
    </template>
    <tempalte v-if="signUpRequest">
    <SignUpPage @create="createAccount" />
  </tempalte>

  </div>
</template>

<script>

// @ is an alias to /src
import LoginPage from '@/components/LoginPage.vue';
import SignUpPage from '@/components/SignUpPage.vue';
export default {
  name: 'LoginSignUpView',
  components: {
    LoginPage,
    SignUpPage
},

  data: ()=> ({

    logInRequest: true ,
    signUpRequest: false,
    accounts: [
      {
      firstName: '',
      lastName: '',
      emailAddress: '',
      password: '',
      picture: ''
      }
      
    ]
  }),

  ethods: {

    createAccount(payload) {

      this.accounts.unshift(payload)

    }
  }
  
  
  
  }
</script>
