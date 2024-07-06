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

exports.updateVolunteer = async (req, res) => {
  const { id } = req.params;

  try {
    const volunteer = await Volunteer.findByPk(id);

    if (!volunteer) {
      return res.status(404).json({ error: 'Volunteer not found' });
    }

    // Atualiza os dados do voluntário com os novos dados recebidos
    await volunteer.update(req.body);

    res.json(volunteer);
  } catch (error) {
    res.status(500).json({ error: 'Failed to update volunteer' });
  }
};
