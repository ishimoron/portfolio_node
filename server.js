const express = require('express')
const nodemailer = require('nodemailer')
const path = require('path')
const cors = require('cors')
const app = express()
const bodyParser = require('body-parser')

app.use('/public', express.static(path.join(__dirname, 'public')));
// app.use(bodyParser.json({ type: 'application/*+json' }))
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.post('/form', async function (req, res) {
    res.set('Access-Control-Allow-Origin', '*')
    console.log(req.body)

    const email = req.body.email
    const name = req.body.name
    const message = req.body.message
    const content = `name: ${name}\n message: ${message}\n email: ${email}`

    var transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'botmailer55@gmail.com',
            pass: '1q2w3e4rA'
        }
    })

    var mailOption = {
        from: email,
        to: 'eugene.ishimov@gmail.com',
        subject: 'contact from ishimov.tech',
        text: content,
    }
    await transporter.sendMail(mailOption, function (err, info) {
        if (err) {
            console.log(err)
        } else {
            console.log('Email Sent' + info.response)
        }
    })
    res.send()
});

app.use(cors()) // Use this after the variable declaration

const PORT = 5000

app.listen(PORT || 5000, () => {
    console.log(`App listening at http://localhost:${PORT}`)
})
