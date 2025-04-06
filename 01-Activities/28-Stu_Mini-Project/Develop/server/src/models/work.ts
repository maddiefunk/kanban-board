import { DataTypes, Sequelize, Model, Optional } from 'sequelize';
import { Volunteer } from './volunteer.js';

interface WorkAttributes {
  id: number;
  name: string;
  status: string;
  description: string;
  assignedVolunteerId?: number;
}

interface WorkCreationAttributes extends Optional<WorkAttributes, 'id'> {}

export class Work extends Model<WorkAttributes, WorkCreationAttributes> implements WorkAttributes {
  public id!: number;
  public name!: string;
  public status!: string;
  public description!: string;
  public assignedVolunteerId!: number;
  public readonly assignedVolunteer!: number;

  /* TODO: DOOOOOONE
    Create properties of Work:

    assignedVolunteer: public, readonly, Volunteer object as associated Volunteer mode;
  */
}

export function WorkFactory(sequelize: Sequelize): typeof Work {
  Work.init(
    {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false, 
      },
      status: {
        type: DataTypes.STRING,
        allowNull: false, 
      },
      description: {
        type: DataTypes.STRING,
        allowNull: false, 
      },
      assignedVolunteerId: {
        type: DataTypes.INTEGER,
        allowNull: false, 
      },
      assignedVolunteer: {
        type: DataTypes.INTEGER,
        allowNull: false, 
      },
    }
  )
  // TODO: Initialize the Work Model
  // DOOOOOONEEEEE
  return Work;
}
