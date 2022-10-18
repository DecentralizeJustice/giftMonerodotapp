const pantry = require('pantry-node')
const pantryID = process.env.pantryID
const pantryClient = new pantry(pantryID) // eslint-disable-line new-cap

exports.handler = async (event, context) => {
  // Only allow POST
  if (event.httpMethod !== 'POST') {
    return { statusCode: 405, body: 'Method Not Allowed' }
  }
  const params = event.body
  const parsed = JSON.parse(params)
  const bucket = parsed.bucket
  const payload = parsed.payload
  // check for correct param
  if (bucket === undefined || payload === undefined) {
    return { statusCode: 406, body: 'Not Valid Bucket or Payload' }
  }
  const results = await uploadContent(bucket, payload)
  return {
    statusCode: 200,
    body: results
  }
}

async function uploadContent (bucket, payload) {
  const results = await pantryClient.basket.create(bucket, payload)
  return results
}
