import * as types from './mutation-types'


export default {
  [types.SAVE_TOKEN](state, payload) {
    state.accessToken = payload.refresh_token;
    state.refreshToken = payload.access_token;
  }
}