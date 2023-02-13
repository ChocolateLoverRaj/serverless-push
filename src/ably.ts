import { configureAbly } from '@ably-labs/react-hooks'

console.log(import.meta.env.VITE_ABLY_TOKEN)
configureAbly({ key: import.meta.env.VITE_ABLY_API_KEY, clientId: 'Same client id' })
