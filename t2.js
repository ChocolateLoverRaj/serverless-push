console.log(await fetch('https://fcm.googleapis.com/fcm/send/craQJPOwGlA:APA91bHoW1kRr7gppzhZkzLmP-x8dtis5353OldNN9hoQWNhzChCwL3zuRxSHmLtiqPybVNj5fAqyMxi7V_1hKpBqIZPGqGEBe-u0ROb1_l4gxrEzpVwP9GTaEJy2sMiwCkFI6tALHu9', {
  method: 'POST',
  headers: {
    TTL: (2419200).toString(),
    'Content-Length': (123).toString(),
    'Content-Type': 'application/octet-stream',
    'Content-Encoding': 'aes128gcm',
    Authorization: 'vapid t=eyJ0eXAiOiJKV1QiLCJhbGciOiJFUzI1NiJ9.eyJhdWQiOiJodHRwczovL2ZjbS5nb29nbGVhcGlzLmNvbSIsImV4cCI6MTY3NjE5ODgwMSwic3ViIjoibWFpbHRvOmV4YW1wbGVAeW91cmRvbWFpbi5vcmcifQ.WaOXirHZJ86Hhv-KmMGnTJxDharRkXGe-KP9EfyawJI8SdCxvn_KH6MLrZkZXadE32XtXSNW9gxOLir0X-myUw, k=BFy6mZ3e9mrsFbQIrRWt0TUZOob8NWndZVmGsGdu5nWIIUN_UcEEI4-23iD9ekL_1qAlbwybpyfnUiANAAcmoWM'
  },
  body: new Uint8Array([202, 51, 135, 19, 222, 192, 236, 67, 16, 62, 183, 79, 125, 239, 7, 9, 0, 0, 16, 0, 65, 4, 149, 102, 115, 151, 1, 115, 222, 167, 46, 112, 147, 133, 189, 146, 44, 244, 96, 151, 0, 137, 125, 231, 100, 225, 83, 154, 149, 240, 174, 196, 182, 35, 32, 255, 83, 84, 1, 229, 15, 148, 195, 33, 64, 126, 170, 12, 77, 189, 83, 59, 217, 239, 83, 54, 240, 179, 98, 92, 60, 249, 30, 9, 21, 210, 98, 14, 134, 103, 186, 248, 252, 95, 20, 166, 60, 205, 220, 42, 181, 39, 198, 153, 65, 6, 243, 14, 41, 48, 44, 15, 193, 75, 181, 41, 145, 161, 20, 111, 117, 45, 120]),
  mode: 'no-cors'
}))
