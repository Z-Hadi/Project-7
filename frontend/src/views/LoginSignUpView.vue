/*<template>
  <div class="vh-100 d-flex justify-content-center align-items-center ">
    <template v-if="logInRequest">
    <LoginPage @create-new="logInRequest = false , signUpRequest = true"/>
    </template>
    <tempalte v-if="signUpRequest">
    <SignUpPage @sign-in="logInRequest = true , signUpRequest = false" />
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
      password: ''
  
      }
      
    ]
  }),

  methods: {

    createAccount(payload) {

      this.accounts.unshift(payload)
     
    }, 
    
    
    
  }
  
  
  
  }
</script>
