
const fs = require('fs')
// const book = {
//     title: 'Ego is the enemy',
//     author: 'Ryan Holiday'
// }
//
// const bookJSON = JSON.stringify(book)
// fs.writeFileSync('1-json.json', bookJSON)


// const dataBuffer = fs.readFileSync('1-json.json')
// const dataJson = dataBuffer.toString()
// const data = JSON.parse(dataJson)
// console.log(data.title)


const dataBuffer = fs.readFileSync('1-json.json')
const dataJSON = dataBuffer.toString()
const data = JSON.parse(dataJSON)
data.name = 'Caleb'
data.age = '40'
const writeData = JSON.stringify(data)
fs.writeFileSync('1-json.json', writeData)

console.log(data)