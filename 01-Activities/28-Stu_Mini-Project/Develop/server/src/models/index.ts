import sequelize from '../config/connection.js';
import { VolunteerFactory } from './volunteer.js';
import { WorkFactory } from './work.js';


// TODO: Create a One-to-Many relationship (Volunteer can have numerous volunteer works)
// DOOOOOONEEEEEE
const Work = WorkFactory(sequelize);
const Volunteer = VolunteerFactory(sequelize);

Work.hasOne(Volunteer, {
    onDelete: 'CASCADE',
});

Volunteer.belongsTo(Work);


export { Volunteer, Work };
