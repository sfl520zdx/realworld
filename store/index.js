import Vuex from 'vuex';
import axios from 'axios';
import jsCookie from 'js-cookie'
import cookieparser from 'cookieparser'
const createStore = () => {
  return new Vuex.Store({

    state: {
      user: getUserFromCookie(),
    },

    mutations: {
      setUser (state, user) {
        jsCookie.set('user', user)
        state.user = user;
      },
    },

    getters: {
      user (state) {
        return state.user;
      }
    },

  })
};

export default createStore;

function getUserFromCookie () {
  let user = null;
  try {
    user = JSON.parse(jsCookie.get('user'));
    return user;
  } catch (ex) {
    jsCookie.set('user', null);
    return null;
  }
}
