import * as types from './mutation-types'


export default {
  [types.SAVE_TOKEN](state, payload) {
    state.accessToken = payload.accessToken;
    state.refreshToken = payload.refreshToken;
  }
}