<template>
  <div id="app">
    <span v-if="loading">로딩중 ... </span>
    <router-view></router-view>
  </div>
</template>

<script>
import KakaoApi from './api/kakao.api'

export default {
  name: 'App',
  data(){
    return {
      loading: false,
    }
  },
  methods: {
    async init() {
      try{
        this.loading = true;
        const initkey = await KakaoApi.kakaoInit();
        if(!window.Kakao.isInitialized()){
          window.Kakao.init(initkey);
        }
        else {
          if(this.$route.query.recheck) {
            window.Kakao.Auth.login({
              success: (dat) => {
                this.$store.dispatch('saveToken', dat);
                this.$router.push("/main");
              },
              fail: (e) => {
                console.log(e);
              }
            });
          }
          else {
            window.Kakao.Auth.setAccessToken(this.$store.state.accessToken);
            this.$router.push("/main");
          }
        }

      } catch(e) {
        console.log(e)
      } finally {
        this.loading = false;
      }
    },
  },
  created() {
    this.init();
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
