// import './assets/main.css'

import { createApp, toRef } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import { SecretPiniaPlugin } from './stores/plugin/SecretPiniaPlugin'
import { hasErrorPlugin } from './stores/plugin/hasErrorPlugin'

const app = createApp(App)

const pinia = createPinia()

pinia.use(SecretPiniaPlugin)

pinia.use(() => ({ hello: 'world' }))

pinia.use(({ store }) => {
  store.message = 'Hello world!'

  if (process.env.NODE_ENV === 'development') {
    // add any keys you set on the store
    store._customProperties.add('message')
  }
})

pinia.use(hasErrorPlugin)

pinia.use(({ store }) => {
  store.$subscribe((mutation, state) => {
    // console.log('change occur in store',store.$id)
    // console.log('this is the mutation',mutation)
    // console.log('this is new state',state.count)
    // react to store changes
  })
  store.$onAction(({name,args,after,onError}) => {

    console.log('this is the name of the function',name,'and args',args)

    after(()=>{
      console.log('finished running function',name)
    })

   onError(()=>{
    console.log('we got an error in',name)
   })

  })
})

app.use(pinia)
app.use(router)

app.mount('#app')
