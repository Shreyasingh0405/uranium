const express = require('express');
const res = require('express/lib/response');
// const loggerModule = require('../logger/logger')
// const helperModule = require('../util/helper')
// const formatterModule = require('../validator/formatter')
// const lodash = require('lodash');
// const { route } = require('express/lib/application');

const router = express.Router();

// router.get('/test-me', function (req, res) {
//     loggerModule.welcomeMessage()
//     helperModule.printTodaysDate()
//     helperModule.printCurrentMonth()
//     helperModule.printBatchInformation()
//     formatterModule.trimString()
//     formatterModule.changeCaseToUpper()
//     formatterModule.changeCaseToLower()
//     res.send('My first ever api!')
// });

// router.get('/hello', function (req, res) {
//     // // Problem a)
//     let months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
//     let subArrays = lodash.chunk(months, 3)
//     console.log('The result after splitting the months array is ', subArrays)

//     // // Problem b)

//     let oddNumbers = [1, 3, 5, 7, 9, 11, 13, 15, 17, 19]
//     console.log('The last 9 odd numbers in the array are: ', lodash.tail(oddNumbers))

//     // // Problem c)
//     let a = [1, 2, 1, 4]
//     let b = [2, 3, 4, 3]
//     let c = [6, 1, 5, 10]
//     let d = [1, 1, 1]
//     let e = [1, 2, 3, 4, 5]

//     console.log('Final array or unique numbers is : ', lodash.union(a, b, c, d, e))

//     // // Problem d)
//     let arrayOfKeyValuePairs = [["horror", "The Shining"], ["drama", "Titanic"], ["thriller", "Shutter Island"], ["fantasy", "Pans Labyrinth"]]
//     console.log('The object created from arrays is :', lodash.fromPairs(arrayOfKeyValuePairs))
//     res.send('My hello api!')
// });

// // problem 1
// // router.get('/candidate', function (req, res) {

// //     let name = ['Akash', 'shreya','sabiha','farheena','suyash','hariom']

// //     console.log(name)
// //     res.send('My hello api!')
// // })

// //problem 2

// router.get('/candidate', function (req, res) {

//     let name = ['Akash', 'shreya', 'sabiha', 'farheena', 'suyash', 'hariom']
//     let a = name.slice(0, 3)

//     console.log(a)
//     res.send('My hello api!')
// })
// //assignment 
// //problem 1

// router.get('/movies', function (req, res) {

//     res.send(["pk", "war", "attack", "twilight", "force"])
// })

// //problem -2
// router.get('/movies/:indexNumber', function (req, res) {
//     const moviesName = ["pk", "war", "attack", "twilight", "force"]
//     let data = req.params.indexNumber

//     res.send(moviesName[data]);
// })

// //problem 3
// router.get('/movies/:indexNumber', function (req, res) {
//     const arr = ['muvi1', 'muvi2', 'muvi3', 'muvi4', 'muvi5']
//     let data = arr.length;
//     const index = req.params.indexNumber
//     if (index > data) {
//         res.send("please enter a valid number")
//     } else { res.send('the' + index + 'movie is:' + arr[index]) }

// });


// //problem 4
// router.get('/films', function (req, res) {
//     let x = [{
//         'id': 1,
//         'name': 'The Shining'
//     }, {
//         'id': 2,
//         'name': 'Incendies'
//     }, {
//         'id': 3,
//         'name': 'Rang de Basanti'
//     }, {
//         'id': 4,
//         'name': 'Finding Nemo'
//     }]
//     res.send(x)

// });

// //problem 5
// router.get('/film/:filmId', function (req, res) {
//     const film = req.params.filmId
//     const arryy = [{
//         'id': 1,
//         'name': 'The Shining'
//     }, {
//         'id': 2,
//         'name': 'Incendies'
//     }, {
//         'id': 3,
//         'name': 'Rang de Basanti'
//     }, {
//         'id': 4,
//         'name': 'Finding Nemo'
//     }]
//     let result = arryy[film]
//     if (result.length <= 0) {
//         res.send("please enter a valid number")
//     } else {
//         res.send(result)
//     }

// });
// //
// router.get("/sol1", function (req, res) {
//     let arr = [1, 2, 3, 5, 6, 7]

//     let total = 0;
//     for (var i in arr) {
//         total += arr[i];
//     }

//     let lastDigit = arr.pop()
//     let consecutiveSum = lastDigit * (lastDigit + 1) / 2
//     let missingNumber = consecutiveSum - total

//     res.send({ data: missingNumber });
// });

// // -write an api which gives the missing number in an array of integers starting from anywhere….e.g [33, 34, 35, 37, 38]: 36 is missing
// router.get("/sol2", function (req, res) {
//     //logic : sum of n consecutive numbers is [ n * (first + last) / 2  ]..so get sum of all numbers in array. now take sum of n consecutive numbers.. n would be length+1 as 1 number is missing
//     let arr = [33, 34, 35, 37, 38]
//     let len = arr.length

//     let total = 0;
//     for (var i in arr) {
//         total += arr[i];
//     }

//     let firstDigit = arr[0]
//     let lastDigit = arr.pop()
//     let consecutiveSum = (len + 1) * (firstDigit + lastDigit) / 2
//     let missingNumber = consecutiveSum - total

//     res.send({ data: missingNumber });
// });

let players = [ ]
router.post('/players', function(req, res){
    let player= req.body
    let plyername = player.name
    for(let i=0;i<players.length;i++){
        if (players[i].name==plyername){
            res.send('player is exist')
        }
    } 


Players.push(player)

console.log(players)
res.send(player)
})
module.exports = router;
