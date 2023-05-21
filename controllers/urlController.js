const crypto = require('crypto');
const URL = require('../models/URL')

const redirectToDocs = (req, res) => {
    return res.redirect('/api-docs')
}
const hashUrl = async (req, res) => {
    const longURL = req.body.url;
    if (!longURL) {
        return res.status(400).send('URL Required!')
    }
    const hashedURL = crypto.createHash('sha256').update(longURL).digest('base64url').toString();
    const newURL = new URL({
        longURL, hashedURL
    })
    try{
        await newURL.save()
    } catch (e) {
        console.error('Error hashing long URl: ', e)
        return res.status(500).send('An error occurred while saving it database')
    }
    return res.status(200).json({hashedURL})
}

const getUrl = async (req, res) => {
    const hashedURL = req.params.id;
    if (!hashedURL) {
        return res.status(400).send('Bad Request')
    }
    try {
        const url = await URL.findOne({hashedURL})
        if(!url) {
            return res.sendStatus(400)
        }
        url.counter += 1
        await url.save()
        return res.redirect(url.longURL);
    } catch (e) {
        return res.sendStatus(400)
    }
}

module.exports = {
    redirectToDocs,
    hashUrl,
    getUrl
}