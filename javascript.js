const url = 'https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json'

const cities = []

const connection = fetch(url)
  .then(blob => blob.json())
  .then(data => cities.push(...data))
// console.log(connection)


// compare the word typed with the array
function findMatches(wordTyped, cities) {
 const myarray = cities.filter(item => {
  console.log(`${wordTyped} and ${item.city}`)
 })
 return myarray
}
