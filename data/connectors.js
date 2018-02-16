import Sequelize from 'sequelize';
import casual from 'casual';
import _ from 'lodash';

const db = new Sequelize('pdc', 'pdc', 'PdcN0d3647', {
  host: 'localhost',
  dialect: 'mysql',
  port: 33060
});

const CaseModel = db.define('case', {
  case_id: { type: Sequelize.STRING,
				primaryKey: true   },
  project_id: { type: Sequelize.INTEGER },
  submitter_id: { type: Sequelize.STRING },
  days_to_lost_to_followup: { type: Sequelize.INTEGER },
  disease_type: { type: Sequelize.STRING },
  index_date: { type: Sequelize.STRING },
  lost_to_followup: { type: Sequelize.STRING },
}, {
	timestamps: false,
	underscored: true,
	freezeTableName: true,
	tableName: 'case'	
});
const SampleModel = db.define('sample', {
  sample_id: { 	type: Sequelize.STRING,
				primaryKey: true  },
  case_id: { type: Sequelize.STRING },
  project_id: { type: Sequelize.STRING },
  submitter_id: { type: Sequelize.STRING },
  sample_type: { type: Sequelize.STRING },
}, {
	timestamps: false,
	underscored: true,
	freezeTableName: true,
	tableName: 'sample'	
});
CaseModel.hasMany(SampleModel, {foreignKey: 'case_id'});
SampleModel.belongsTo(CaseModel, {foreignKey: 'case_id'});

const Case = db.models.case;
const Sample = db.models.sample;

export { Case, Sample };