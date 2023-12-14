import axios from 'axios';
import { Commit } from 'vuex';

export const fetchStopsData = async({ commit }: { commit: Commit }) => {
  await axios.get(`${process.env.VUE_APP_BASE_URI}/stops`).then(
    res => {
      commit('setStops', res.data);
    }
  ).catch((error) => {
    console.log(error)
  })
}
