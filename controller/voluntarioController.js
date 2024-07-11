import Voluntario from '../models/voluntario';

exports.getAllVolunteers = async (req, res) => {
  try {
    const Voluntario = await Voluntario.findAll();
    res.json(Voluntario);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch volunteers' });
  }
};

exports.createVolunteer = async (req, res) => {
  try {
    const newVolunteer = await Voluntario.create(req.body);
    res.json(newVolunteer);
  } catch (error) {
    res.status(500).json({ error: 'Failed to create volunteer' });
  }
};

exports.updateVolunteer = async (req, res) => {
  const { id } = req.params;

  try {
    const Voluntario = await Voluntario.findByPk(id);

    if (!Voluntario) {
      return res.status(404).json({ error: 'Volunteer not found' });
    }

    // Atualiza os dados do voluntário com os novos dados recebidos
    await Voluntario.update(req.body);

    res.json(Voluntario);
  } catch (error) {
    res.status(500).json({ error: 'Failed to update volunteer' });
  }

  exports.getById = async (req, res) => {
    const { userId } = req.params;
  
    try {
      const vol = await Voluntario.findByPk(userId);
  
      if (!vol) {
        return res.status(403).json({ error: 'Volunteer not found' });
      }
      
      res.status(200).json(vol);
    } catch (error) {
      res.status(500).json({ error: 'Failed to update volunteer' });
    }
  }
};
