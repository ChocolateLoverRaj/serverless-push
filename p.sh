curl -X POST -H "Authorization: Bearer LjRMfKEXAqROl3GVw4PZOj5LzspjFiX4pilEsogjnhU" -H "Content-Type: application/json" -d '{
"message":{
   "notification":{
     "title":"FCM Message",
     "body":"This is an FCM Message"
   },
   "token":"craQJPOwGlA:APA91bHoW1kRr7gppzhZkzLmP-x8dtis5353OldNN9hoQWNhzChCwL3zuRxSHmLtiqPybVNj5fAqyMxi7V_1hKpBqIZPGqGEBe-u0ROb1_l4gxrEzpVwP9GTaEJy2sMiwCkFI6tALHu9"
}}' https://fcm.googleapis.com/fcm/send/craQJPOwGlA:APA91bHoW1kRr7gppzhZkzLmP-x8dtis5353OldNN9hoQWNhzChCwL3zuRxSHmLtiqPybVNj5fAqyMxi7V_1hKpBqIZPGqGEBe-u0ROb1_l4gxrEzpVwP9GTaEJy2sMiwCkFI6tALHu9
