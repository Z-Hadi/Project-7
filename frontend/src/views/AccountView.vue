<template>
  <div>
      <div id="AccountView" v-for="(account, index) in accounts" :key="index" >
        
      <TheAccountPage :firstName="account.firstName"  :lastName="account.lastName" :emailAddress="account.emailAddress" :password="account.password" :picture="account.picture"> </TheAccountPage>
    </div>
  </div>
</template>

<script>
import TheAccountPage from '@/components/TheAccountPage.vue'

export default {
  name: 'AccountView',
  components: {
    TheAccountPage
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
  })

}
</script>

