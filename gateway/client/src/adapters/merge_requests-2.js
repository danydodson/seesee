// app.use('/myapi', function (req, res) { 
//   var url = `${POSTS_SERVICE}/see` // 'https://some-service.com/api1';
//   res.setHeader('content-type', 'application/json')
//   var responseOne = await CallFirstSystem()
//   var responseTwo = await CallSecondSystem()
//   var finalResponse = doSomeLogic(responseOne, responseTwo)
//   res.send(finalResponse)
// })

// async function CallFirstSystem() {
//   try {
//     return new Promise(async function (resolve, reject) {
//       try {
//         var url = await got.get(`${POSTS_SERVICE}/api/users/me`).json()  // "http://firssytem/api"
//         var updateResult = []
//         await axios.get(url, JSON.stringify(requestPayLoad), { headers: { 'Accept': 'application/json', 'Content-Type': 'application/json' }, })
//           .then(function (response) { updateResult = innerLogicOne(response) })
//           .catch(function (error) { console.log(error) })
//         resolve(updateResult)
//       }
//       catch (err) { console.log(err) }
//       finally { }
//     })
//   }
//   catch (err_1) { console.log(err_1) }
// }

// async function CallSecondSystem() {
//   try {
//     return new Promise(async function (resolve, reject) {
//       try {
//         var url = await got.get(`${POSTS_SERVICE}/api/posts/me`).json() // http://secondSystem/api"
//         var updateResult = []
//         await axios.get(url, JSON.stringify(requestPayLoad), { headers: { 'Accept': 'application/json', 'Content-Type': 'application/json' }, })
//           .then(function (response) { updateResult = innerLogicOne(response) })
//           .catch(function (error) { console.log(error) })
//         resolve(updateResult)
//       }
//       catch (err) { console.log(err) }
//       finally { }
//     })
//   }
//   catch (err_1) { console.log(err_1) }
// }
