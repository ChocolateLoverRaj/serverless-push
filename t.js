import webPush from 'web-push'
import { config } from 'dotenv'
config()

webPush.sendNotification({
  endpoint: 'https://fcm.googleapis.com/fcm/send/craQJPOwGlA:APA91bHoW1kRr7gppzhZkzLmP-x8dtis5353OldNN9hoQWNhzChCwL3zuRxSHmLtiqPybVNj5fAqyMxi7V_1hKpBqIZPGqGEBe-u0ROb1_l4gxrEzpVwP9GTaEJy2sMiwCkFI6tALHu9',
  expirationTime: null,
  keys: {
    p256dh: 'BN3iVa82K_wxgiMd3oPDBYU4bldomSnBS7Uuz-svR0XixaPZFfGyusQwKmgjNi8Fb-yJOeNWbn-pBXFK_r1wfPg',
    auth: 'askKJRS9No-CScrWkD0ydA'
  }
}, 'Message from Node.js', {
  vapidDetails: {
    subject: 'mailto:example@yourdomain.org',
    privateKey: process.env.VAPID_PRIVATE_KEY,
    publicKey: process.env.VITE_VAPID_PUBLIC_KEY
  }
})
