<template>
  <div>
    <div id="AccountView" v-for="(account, index) in accounts" :key="index">

      <TheAccountPage :firstName="account.firstName" :lastName="account.lastName" :emailAddress="account.emailAddress"
        :password="account.password"> </TheAccountPage>
    </div>
  </div>
</template>

<script>
import TheAccountPage from '@/components/TheAccountPage.vue'
import Cookies from 'js-cookie'
export default {
  name: 'AccountView',
  components: {
    TheAccountPage
  },
  data: () => ({
    accounts: [
      {
        firstName: '',
        lastName: '',
        emailAddress: '',
        password: ''
      }

    ]

  }),
  mounted: () => {

    const userId = Cookies.get('userId') 
    const newToken = Cookies.get('token')
    console.log(userId)
    fetch("http://localhost:8000/api/auth/:id",userId, {

      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + newToken
      }

    }).then((response) => {
      return response.json()
    }).catch(error => {
        console.log(error)


      }
    )}}
</script>

