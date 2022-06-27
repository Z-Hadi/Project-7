<template>
<div id="app"> 
    <TheNavBar/>
 <!--
    <router-link to="/LoginSignUp"> Login & Sign Up</router-link>
 -->
   <router-view></router-view>
    
</div>
</template>
<script>


import TheNavBar from '@/components/TheNavBar.vue'
export default {
    components: {TheNavBar}
}

</script>
<style lang="scss">

</style>
