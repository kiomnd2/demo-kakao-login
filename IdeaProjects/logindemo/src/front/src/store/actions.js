import * as types from './mutation-types';



// dispatch
export const saveToken = ({commit}, info) => {

  localStorage.setItem("accessToken", info.accessToken);
  localStorage.setItem("refreshToken", info.refreshToken);

  commit([types.SAVE_TOKEN], info);
};