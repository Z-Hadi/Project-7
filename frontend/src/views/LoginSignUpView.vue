/*<template>
  <div class="vh-100 d-flex justify-content-center align-items-center ">
    
    <LoginSignUp @create="createAccount" />
    
    
  </div>
</template>

<script>

// @ is an alias to /src
import LoginSignUp from '@/components/LoginSignUp.vue'
export default {
  name: 'LoginSignUpView',
  components: {
    LoginSignUp
    
},

  data: ()=> ({
    accounts: [
      {
      firstName: 'Zaid',
      lastName: 'Hadi',
      emailAddress: 'zaid@email.com',
      password: '****',
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
