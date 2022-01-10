const { Router } = require('express');
const { m2_equipe } = require('../models');
const { m2_usuario } = require('../models');

const router = Router();

router.get('/', async (req, res) => {
  const equipes = await m2_equipe.findAll();
  res.status(200).json(equipes);
});

router.post('/', async (req, res) => {
  const { name, ativo } = req.body;

  const equipeAlreadExists = await m2_equipe.findOne({ where: { name: name } });

  if(!equipeAlreadExists){
    await m2_equipe.create({ name, ativo });
    res.status(200).json({ message: 'Registered successfully!' });
  }else{
    res.status(400).json({ message: 'Equipe Already Exists!' });
  };  
});

router.put('/delete/:id', async (req, res) => {
  const id = req.params.id;
  const equipe = await m2_equipe.findByPk(id);
  if(equipe){
    await m2_equipe.update(
      { ativo: 0},
      {
        where: { id: req.params.id },
      }
    );
    await m2_usuario.update(
      { ativo: 0 },
      {
        where: { equipe_id: req.params.id },
      }
    );
    res.status(200).json({ message: "Update success!" });
  }else{
    res.status(400).json({ message: 'Equipe not found!' });
  }
});

router.put('/:id', async (req, res) => {
  const { name, ativo } = req.body;

  const id = req.params.id;

  const equipe = await m2_equipe.findByPk(id);

  if(equipe){
    const equipeNameAlreadExists = await m2_equipe.findOne({ where: { name: name } });

    if(!equipeNameAlreadExists){
      await m2_equipe.update(
        { name, ativo },
        {
          where: { id: req.params.id },
        }
      );
      res.status(200).json({ message: "Update success!" });
    }else{
      res.status(400).json({ message: 'This name for equipe Already Exists!' });
    }
  }else{
    res.status(400).json({ message: 'Equipe not found!' });
  } 
});

router.get('/find/:id', async (req, res) => {
  const id = req.params.id;

  const equipe = await m2_equipe.findByPk(id);

  if(equipe){
    res.status(200).json(equipe);
  }else{
    res.status(400).json({ message: 'Equipe not found!' });
  }
});

router.get('/findAll/ativos', async (req, res) => {
  const equipes = await m2_equipe.findAll({ where: { ativo: 1 } });
  res.status(200).json( equipes);
});
  
router.get('/findAll/inativos', async (req, res) => {
  const equipes = await m2_equipe.findAll({ where: { ativo: 0 } });
  res.status(200).json(equipes);
});


module.exports = router;
