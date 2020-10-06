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
  Login(data) {

    return this.client.post('/api/login', { id: data})
  }
};


export default new KakaoAPI(HttpClient);
