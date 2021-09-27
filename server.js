const express = require('express')
const app = express()
const port = 3000

app.get('/calcquery/:num1/:num2', (req, res) => {
    console.log(req.query, " req.query")
    let num1 = Number(req.params.num1)
    let num2 = Number(req.params.num2)

    if (req.query.operation === 'add') {
        res.send(`The sum is ${num1 + num2}`)
    } else if (req.query.operation === 'multiply') {
        res.send(`The product is ${num1 * num2}`)
    } else if (req.query.operation === 'subtract') {
        res.send(`The total is ${num1 - num2}`)
    } else if (req.query.operation === 'divide') {
        res.send(`The total is ${num1 / num2}`)
    } else if (req.query.operation === 'power') {
        res.send(`The total is ${num1 ** num2}`)
    } else {
        res.send('No operation')
    }
})



app.listen(port, () => {
    console.log('listening....')
})
