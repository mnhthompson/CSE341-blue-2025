


const express = require('express');
const router = express.Router();

const contactsController = require('../controllers/contacts');

//get
router.get('/', contactsController.getAll);
router.get('/:id', contactsController.getSingle);

//post
router.post('/', contactsController.createContact);

//put
router.put('/:id', contactsController.updateContact);

//delete
router.delete('/:id', contactsController.deleteContact);


module.exports = router;