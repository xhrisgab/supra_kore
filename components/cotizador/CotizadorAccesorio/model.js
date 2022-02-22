/* jshint indent: 2 */

const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('CotizadorAccesorio', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    codCotizacion: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    codModelo: {
      type: DataTypes.CHAR(15),
      allowNull: false
    },
    codItem: {
      type: DataTypes.CHAR(15),
      allowNull: false
    },
    chasis: {
      type: DataTypes.CHAR(40),
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'CotizadorAccesorio',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK__Cotizado__3213E83F7D2E87F5",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
};
