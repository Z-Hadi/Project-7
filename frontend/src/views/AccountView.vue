<template>
  <div>
    <div id="AccountView" v-for="(account, index) in accounts" :key="index">
      <TheAccountPage
        :firstName="account.firstName"
        :lastName="account.lastName"
        :emailAddress="account.emailAddress"
        
      >
      </TheAccountPage>
    </div>
  </div>
</template>

<script>
import TheAccountPage from "@/components/TheAccountPage.vue";
import Cookies from "js-cookie";
const newFirstName = Cookies.get("userFirstName");
const newLastName = Cookies.get("userLastName");
const newEmailAddress = Cookies.get("userEmailAddress");

console.log(Cookies)
export default {
  name: "AccountView",
  components: {
    TheAccountPage,
  },
  data: () => ({
    accounts: [
      {
        firstName: newFirstName,
        lastName: newLastName,
        emailAddress: newEmailAddress
        
      },
    ],
  }),
  
    
};
</script>
