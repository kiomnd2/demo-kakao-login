import HttpClient from "./client";


const KakaoAPI = class {
  client;
  constructor(client) {
    this.client = client;
  }

  kakaoInit() {
    return this.client.post('/api/init')
      .then(({ data }) => data.initKey || {});
  }
};


export default new KakaoAPI(HttpClient);
