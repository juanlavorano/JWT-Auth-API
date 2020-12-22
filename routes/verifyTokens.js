const { json } = require("body-parser");

const jwt = require('jsonwebtoken');
const { func } = require("@hapi/joi");

module.exports = function auth(req, res, next) {
    const token = req.header('auth-token')
    if (!token) return res.status(401).send('Access denied')

    try {
        const verified = jwt.verify(token, process.env.TOKEN_SECRET)
        req.user = verified
    } catch {
        res.status(400).status('Invalid Token')
    }
}