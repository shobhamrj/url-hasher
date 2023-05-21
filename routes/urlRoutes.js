const express = require('express')
const {redirectToDocs, hashUrl, getUrl} = require('../controllers/urlController')

const router = express.Router()

router.post('/api/hash-url', hashUrl)
router.get('/api/hash-url/:id', getUrl)
router.get('/', redirectToDocs)

module.exports = router