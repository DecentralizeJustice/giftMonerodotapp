const pantry = require('pantry-node')
const pantryID = process.env.pantryID
const pantryClient = new pantry(pantryID) // eslint-disable-line new-cap
const options = { parseJSON: true } // optionaldotenv

exports.handler = async (event, context) => {
  // Only allow POST
  if (event.httpMethod !== 'POST') {
    return { statusCode: 405, body: 'Method Not Allowed' }
  }
  const params = event.body
  const parsed = JSON.parse(params)
  const bucket = parsed.bucket
  // check for correct param test
  if (bucket === undefined) {
    return { statusCode: 406, body: 'Not Valid Bucket' }
  }
  const results = await getContent(bucket)
  return {
    statusCode: 200,
    body: JSON.stringify(results)
  }
}

async function getContent (bucket) {
  const results = await pantryClient.basket.get(bucket, options)
  return results
}
