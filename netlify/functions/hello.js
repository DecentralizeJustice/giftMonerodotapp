const pantry = require('pantry-node')
const pantryID = process.env.pantryID
const pantryClient = new pantry(pantryID) // eslint-disable-line new-cap
const options = { parseJSON: true } // optionaldotenv

exports.handler = async (event, context) => {
  const results = await getContent()
  return {
    statusCode: 200,
    body: results
  }
}

async function getContent (params) {
  pantryClient.basket
    .get('newBasket39', options)
    .then((contents) => { return contents })
}
