var request = require('request')

const promiseRequest = async (req) => {
  return new Promise((resolve, reject) => {
          request.get(req, async function(error, response, body){
              try {
                  var res = JSON.parse(body)    
                  resolve(res)
              }catch(e) {
                  reject(body)
              }
              
          })
      }) 
}

module.exports = { promiseRequest }