<template>
  <div>
   
      <TheAccountPage
        :firstName="firstName"
        :lastName="lastName"
        :emailAddress="emailAddress"
        :password="password"
        
      >
      </TheAccountPage>
  </div>
</template>

<script>
import TheAccountPage from "@/components/TheAccountPage.vue";



export default {
  name: "AccountView",
  components: {
    TheAccountPage,
  },
  mounted(){
    const user = JSON.parse(localStorage.getItem('user'))
    this.firstName= user.firstName
    this.lastName= user.lastName
    this.emailAddress= user.emailAddress



  },
  data: () => ({
   
        firstName: '',
        lastName: '',
        emailAddress: '',
        password:''
        
      
   
  }),


  
    
};
</script>
