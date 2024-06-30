const express = require('express');
const router = express.Router();
const volunteerController = require('../controllers/voluntarioController');

router.get('/volunteers', volunteerController.getAllVolunteers);
router.post('/volunteers', volunteerController.createVolunteer);

module.exports = router;
