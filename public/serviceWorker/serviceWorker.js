/* eslint-env worker */
console.log('Push service worker v3')
self.addEventListener('push', event => {
  console.log(event.data.text(), Math.random())
})
