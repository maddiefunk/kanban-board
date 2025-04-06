import { DataTypes, Sequelize, Model, Optional } from 'sequelize';

interface VolunteerAttributes {
  id: number;
  volunteerName: string;
}

interface VolunteerCreationAttributes extends Optional<VolunteerAttributes, 'id'> {}

export class Volunteer extends Model<VolunteerAttributes, VolunteerCreationAttributes> implements VolunteerAttributes {
  public id!: number;
  public volunteerName!: string;
  /* TODO: DOOOOOONE 
    Create id and volunteerName properties
    id: public & number
    volunteerName: public & string
  */
}

export function VolunteerFactory(sequelize: Sequelize): typeof Volunteer {
  Volunteer.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true, 
    },
    volunteerName: {
      type: DataTypes.string,
      allowNull: false,
    },
  },
);
  // TODO: Initialize the Volunteer Model DOOOOONE
  return Volunteer;
}
