// storing the API in a varialbe
const url = 'https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json'

// creating an array to store the API data
const cities = []

// call and response of the API, and also reading it as json format.
const connection = fetch(url)
  .then(blob => blob.json())
  .then(data => cities.push(...data))

// compare the word typed with the array
function findMatches(wordTyped, cities) {
 const myarray = cities.filter(item => {
  const regex = new RegExp(wordTyped, 'gi')
  // return item.city.match(regex) || item.state.match(regex)
  console.log('test')
 })
}



// displaying the result

// get the dom
