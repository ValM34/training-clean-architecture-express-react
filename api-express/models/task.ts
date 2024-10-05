import { Sequelize, DataTypes } from 'sequelize';
import { v4 as uuidv4 } from 'uuid';
import dotenv from 'dotenv'
dotenv.config({ path: './.env.local' })

// const sequelize = new Sequelize(`${process.env.DATABASE_TYPE}://${process.env.DATABASE_USERNAME}:${process.env.DATABASE_PASSWORD}@${process.env.DATABASE_HOST}:${process.env.DATABASE_PORT}/${process.env.DATABASE_NAME}`);
const sequelize = new Sequelize('mysql://root:@localhost:3306/todolist-express-clean-architecture'); // @TODO régler ce problème

const Task = sequelize.define('Task', {
  // Model attributes are defined here
  id: {
    type: DataTypes.UUID,
    defaultValue: uuidv4,
    primaryKey: true
  },
  content: {
    type: DataTypes.STRING(500),
    allowNull: true
  },
  isDone: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
    defaultValue: 0
  },
  title: {
    type: DataTypes.STRING(100),
    allowNull: false
  }
}, {
  // Other model options go here
});

export default Task;

// Actualiser le modèle en BDD : ATTENTION : ça supprime toutes les entrées
// Task.sync({force: true});
