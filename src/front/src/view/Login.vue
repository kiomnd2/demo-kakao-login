<template>
  <div>

  </div>
</template>

<script>
  export default {
    name: "Login",
    async created() {

        window.Kakao.Auth.login({
          success: (dat) => {
            this.$store.dispatch('saveToken', dat);

            if (this.$route.query.redirect) {
              this.$router.replace(this.$route.query.redirect);
            }
          },
          fail: (e) => {
            console.log(e);
          }
        });
    }
  }
</script>

<style scoped>

</style>
