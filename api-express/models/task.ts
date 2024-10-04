import { Sequelize, DataTypes } from 'sequelize';
import dotenv from 'dotenv'
dotenv.config({ path: './.env.local' })
console.log(process.env.DATABASE_TYPE)
// const sequelize = new Sequelize(`${process.env.DATABASE_TYPE}://${process.env.DATABASE_USERNAME}:${process.env.DATABASE_PASSWORD}@${process.env.DATABASE_HOST}:${process.env.DATABASE_PORT}/${process.env.DATABASE_NAME}`);
const sequelize = new Sequelize('mysql://root:@localhost:3306/todolist-express-clean-architecture');

const Task = sequelize.define('Task', {
  // Model attributes are defined here
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
