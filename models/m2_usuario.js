module.exports = (sequelize, DataTypes) => {
  const m2_usuario = sequelize.define('m2_usuario',{
    name: DataTypes.STRING(150),
    login: DataTypes.STRING(30),
    password: DataTypes.STRING(150),
    ativo: DataTypes.INTEGER,
    equipe_id: DataTypes.INTEGER,
  });

  m2_usuario.associate = function(models){
    m2_usuario.belongsTo(models.m2_equipe,{
      foreignKey: 'equipe_id',
      as: 'equipe'
    });
  }
  
  return m2_usuario;
}