// var port = process.env.PORT || 3000,
//   express = require('express'),
//   request = require('request'),
//   app = express()

// var async = require('async')

// app.set('view engine', 'ejs')

// var hikes = {
//   url: 'https://api.com/hikes',
//   headers: {
//     'Identifier': identifier
//   }
// }

// var availability = {
//   url: 'https://api.com/hikes',
//   headers: {
//     'Identifier': identifier
//   }
// }


// app.get('/', function (req, res) {

//   function callback(error, response, body, cb) {
//     if (error || response.statusCode != 200) return cb(true)
//     // instead of sending data directly to view, send it to async callback to merge it latter
//     cb(null, JSON.parse(body).hikes)
//   }

//   // tasks to run in parallel
//   var tasks = {
//     hikes: function (cb) {
//       request(hikes, function (error, response, body) {
//         callback(error, response, body, cb)
//       })
//     },
//     availability: function (cb) {
//       request(availability, function (error, response, body) {
//         callback(error, response, body, cb)
//       })
//     }
//   }

//   async.parallel(tasks, function (err, resp) {
//     // handle error here, the error could be caused by any of the tasks.
//     if (err) return

//     // get an array of all the availability ids
//     var availabilityIdMap = resp.availability.map(function (availability) { return availability.id })

//     // merging hike to corresponding availability object
//     var data = resp.hikes.map(function (hike) {

//       // finding the availability against the hike id.
//       var availabilityIndex = availabilityIdMap.indexOf(hike.id)

//       // availability not found, just return hike
//       if (availabilityIndex < 0)
//         return hike

//       // get the matching availability object
//       var matchingAvailabilityObj = resp.availability[availabilityIndex]

//       // merge both objects
//       var mergedObj = Object.assign(hike, matchingAvailabilityObj)

//       return mergedObj
//     })

//     // now the data will have an array of merged object with properties from hike and availability objects
//     res.render('index', { data: data })
//   })
// })


// app.listen(port, function () {
//   console.log('Running')
// })