import axios from 'axios';
import { Commit } from 'vuex'

export const getStops= ({ commit }) => {
  axios.get('http://localhost:3000/stops').then(
    response => {
      commit('SET_STOPS', response.data)
    }
  ).catch((error) => {
    console.log(error)
  })
}