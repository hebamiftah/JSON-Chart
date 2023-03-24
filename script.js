// 1. To Make the Array of our fruits Objects
let fruits = [
  { name: 'Apple', quantity: 20, color: 'red' },
  { name: 'Orange', quantity: 10, color: 'orange' },
  { name: 'Banana', quantity: 15, color: 'yellow' },
  { name: 'Kiwi', quantity: 5, color: 'green' },
  { name: 'Blueberry', quantity: 5, color: 'blue' },
  { name: 'Grapes', quantity: 10, color: 'purple' },
]

// 2. To access the canvas object of our website
let canvas = document.getElementById('myCanvas')
let ctx = canvas.getContext('2d')

// Variables for our Program
let chartWidth = 1400
let chartHeight = 600

let barLeftMargin = 10
let barHeight = 90
// 3. We have to draw a Bar Chart depending upon the list
for (let i = 0; i < fruits.length; i++) {
  let barWidth = fruits[i].quantity * 50
  let xAxis = barLeftMargin
  let yAxis = i * barHeight

  // color of the bar
  ctx.fillStyle = fruits[i].color
  ctx.fillRect(xAxis, yAxis, barWidth, barHeight)

  // color of our text
  ctx.fillStyle = 'black'
  ctx.font = '22px Arial'
  ctx.fillText(fruits[i].quantity, xAxis + 10, yAxis + 40)
  ctx.fillText(fruits[i].name, xAxis + 10, yAxis + 65)
}
