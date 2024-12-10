import { toRef } from 'vue'

export function hasErrorPlugin({ store }) {
  store.$state.hasError = true
  store.hasError = toRef(store.$state, 'hasError')
}

threshold