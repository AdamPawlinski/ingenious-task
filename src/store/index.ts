import { InjectionKey } from 'vue'
import { createStore, Store, useStore as useStoreAlias } from 'vuex';
import { state } from './state';
import type { State } from '../types'
import * as getters from './getters';
import * as actions from './actions';
import * as mutations from './mutations';

// export const key: InjectionKey<Store<State>> = Symbol()

export default createStore<State>({
  state,
  getters,
  mutations,
  actions,
})

// export function useStore() {
//   return useStoreAlias(key)
// }