<template>
  <div>
    <div>
      <md-card>
        <md-card-header>
          <md-card-header-text>
            <div class="md-title">{{kakaoInfo.nickname}}</div>
          </md-card-header-text>
          <md-card-media>
            <img style="height: 100%" v-bind:src="kakaoInfo.profile_image_url" alt="People">
          </md-card-media>
        </md-card-header>
      </md-card>
    </div>
  </div>
</template>

<script>
  import KakaoAPI from '../api/kakao.api'
  export default {
    name: "Main",
    data() {
      return {
        kakaoInfo: {
          nickname: '',
          profile_image_url: ''
        }
      }
    },
    methods: {
      renderUserInfo : function(data) {
        console.log("userData : ",data);
        const kakaoAccount = data.kakao_account;
        this.kakaoInfo = kakaoAccount.profile;

      },
    },
    created() {
      window.Kakao.API.request({
        url: '/v2/user/me',
        success: (data) => {
          console.log('사용자 정보를 표시합니다');

          KakaoAPI.Login(data).then(({data}) => {
            console.log(data);
          });

          this.renderUserInfo(data)

        },
        fail: (e) => {
          console.log(e);
          console.error("사용자 정보를 표시하는데 실패했습니다.");
          this.$router.push("/login");
        }
      });
    }
  }
</script>

<style scoped>
  .md-card {
    width: 320px;
    margin: 4px;
    display: inline-block;
    vertical-align: top;
  }
</style>
