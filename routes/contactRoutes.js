const express = require('express');
const router = express.Router();
const { addContact, getContacts } = require('../controllers/contactController');

router.get('/contacts', getContacts);
router.post('/add-contact', addContact);

module.exports = router;
