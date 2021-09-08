const express = require('express')
const app = express()

app.get('/', (req, res) => {
    res.json({
        firstName: 'Brad',
        lastName: 'Travery'
    })
})
// Define Routes
const user = require('./routes/users')
const contact = require('./routes/contacts')
const auth = require('./routes/auth')

app.use('/api/users', user)
app.use('/api/contacts', contact)
app.use('/api/auth',auth)


const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`))