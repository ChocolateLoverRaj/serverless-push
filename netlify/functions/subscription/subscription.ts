import { type Handler } from '@netlify/functions'

export const handler: Handler = async (event, context) => {
  let json: any
  try {
    json = JSON.parse(event.body as string)
  } catch {
    return { statusCode: 400 }
  }
  console.log(json)
  return {
    statusCode: 503
  }
}
