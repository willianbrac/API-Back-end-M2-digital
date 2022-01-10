const { Router } = require('express');
const { m2_equipe } = require('../models');
const { m2_usuario } = require('../models');

const router = Router();

router.get('/', async (req, res) => {
  const usuarios = await m2_usuario.findAll();
  res.status(200).json(usuarios);
});

router.post('/', async (req, res) => {
  const { 
      name,
      login,
      password,
      ativo,
      equipe_id,
  } = req.body;

  const loginAlreadExists = await m2_usuario.findOne({ where: { login: login } });

  if(!loginAlreadExists){
    await m2_usuario.create({ 
      name,
      login,
      password,
      ativo,
      equipe_id,
    });

    res.status(200).json({ message: 'Registered successfully!' });
  }else{
    res.status(400).json({ message: 'Account Already Exists!' });
  };  
});

router.put('/delete/:id', async (req, res) => {
  const id = req.params.id;
  const usuario = await m2_usuario.findByPk(id);
  if(usuario){
    await m2_usuario.update(
      { ativo: 0},
      {
        where: { id: id },
      }
    );
    res.status(200).json({ message: "Update success!" });
  }else{
    res.status(400).json({ message: 'Usuario not found!' });
  }
});

router.put('/:id', async (req, res) => {
  const {
    name,
    login,
    password,
    ativo,
    equipe_id  
  } = req.body;

  const id = req.params.id;

  const usuario = await m2_usuario.findByPk(id);

  if(usuario){
    const loginAlreadExists = await m2_usuario.findOne({ where: { login: login } });

    if(!loginAlreadExists){
      await m2_usuario.update({
          name,
          login,
          password,
          ativo,
          equipe_id 
      },
        {
          where: { id: id },
        }
      );
      res.status(200).json({ message: "Update success!" });
    }else{
      res.status(400).json({ message: 'This login for usuario Already Exists!' });
    }
  }else{
    res.status(400).json({ message: 'Usuario not found!' });
  } 
});

router.get('/:id', async (req, res) => {
  const id = req.params.id;

  const usuario = await m2_usuario.findByPk(id);

  if(usuario){
    res.status(200).json(usuario);
  }else{
    res.status(400).json({ message: 'usuario not found!' });
  }
});

router.get('/findAll/ativos', async (req, res) => {
  const usuarios = await m2_usuario.findAll({ where: { ativo: 1 } });
  res.status(200).json(usuarios);
});

router.get('/findAll/inativos', async (req, res) => {
  const usuarios = await m2_usuario.findAll({ where: { ativo: 0 } });
  res.status(200).json(usuarios);
});

router.get('/find/componentes/:id', async (req, res) => {
  const id = req.params.id;
  const equipe = await m2_equipe.findByPk(id);
  if(equipe){
    const membros = await m2_usuario.findAll({ where: { equipe_id: id } });
    res.status(200).json({membros, equipe});
  }else{
    res.status(400).json({ message: 'Equipe not found!' });
  }
  
});

module.exports = router;
