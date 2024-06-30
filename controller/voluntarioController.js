const Volunteer = require('../models/voluntario');

exports.getAllVolunteers = async (req, res) => {
  try {
    const volunteers = await Volunteer.findAll();
    res.json(volunteers);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch volunteers' });
  }
};

exports.createVolunteer = async (req, res) => {
  try {
    const newVolunteer = await Volunteer.create(req.body);
    res.json(newVolunteer);
  } catch (error) {
    res.status(500).json({ error: 'Failed to create volunteer' });
  }
};
