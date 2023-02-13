import { render } from 'preact'
import { App } from './app'
import './index.css'

globalThis.process = { env: { } } as any

if ('serviceWorker' in navigator && 'PushManager' in window) {
  navigator.serviceWorker.register('./serviceWorker/serviceWorker.js').then(serviceWorkerRegistration => {
    console.info('Service worker was registered.')
    console.info({ serviceWorkerRegistration })
  }).catch(error => {
    console.error('An error occurred while registering the service worker.')
    console.error(error)
  })
} else {
  console.error('Browser does not support service workers or push messages.')
}

render(<App />, document.getElementById('app') as HTMLElement)
