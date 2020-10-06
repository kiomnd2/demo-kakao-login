import * as types from './mutation-types';


// dispatch
export const saveToken = ({commit}, info) => {

  console.log("saved Token", info);
  localStorage.setItem("accessToken", info.access_token);
  localStorage.setItem("refreshToken", info.refresh_token);

  commit(types.SAVE_TOKEN, info);
};


export const login = ({commit}, info) => {
  console.log("login !");
  localStorage.setItem("jwtToken", info.token);

  commit(types.SAVE_JWT_TOKEN, info);
};
