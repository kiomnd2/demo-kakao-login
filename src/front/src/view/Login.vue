<template>
  <div>
    <a v-on:click="openLogin">
      <img src="//k.kakaocdn.net/14/dn/btqCn0WEmI3/nijroPfbpCa4at5EIsjyf0/o.jpg"
           width="222"/>
    </a>
  </div>
</template>

<script>
  export default {
    name: "Login",
    methods: {
      openLogin() {
        window.Kakao.Auth.login({
          success: (dat) => {
            this.$store.dispatch('saveToken', dat);

            if (this.$route.query.redirect) {
              this.$router.replace(this.$route.query.redirect);
            } else {
              this.$router.push("/main")
            }
          },
          fail: (e) => {
            console.log(e);
          }
        });
      }
    },
    async created() {
      this.openLogin();

    }
  }
</script>

<style scoped>

</style>
