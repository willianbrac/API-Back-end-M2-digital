module.exports = (sequelize, DataTypes) => {
  const m2_equipe = sequelize.define('m2_equipe',{
    name: DataTypes.STRING(150),
    ativo: DataTypes.INTEGER
  });

  return m2_equipe;
}