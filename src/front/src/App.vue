<template>
  <div id="app">
    <span v-if="loading">로딩중 ... </span>
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

        window.Kakao.init(initkey);

        window.Kakao.Auth.login({
          success: (dat) => {
            this.$store.dispatch('saveToken', dat);
            console.log(this.$store.state);
          },
          fail: (e) => {
            alert(e);
          }
        });
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
