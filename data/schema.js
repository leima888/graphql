import { makeExecutableSchema, addMockFunctionsToSchema } from 'graphql-tools';
import resolvers from './resolvers';

const typeDefs = `
type Query {
  case(case_id: String): Case
  allCases: [Case]
  sample(sample_id: String): Sample
  allSamples: [Sample]
}
type Case {
  case_id: String
  project_id: Int
  submitter_id: String
  days_to_lost_to_followup: Int
  disease_type: String
  index_date: String
  lost_to_followup: String
  samples: [Sample]
}
type Sample {
  sample_id: String
  project_id: String
  submitter_id: String
  sample_type: String
  case: Case
}
`;

//const schema = makeExecutableSchema({ typeDefs });
const schema = makeExecutableSchema({ typeDefs, resolvers });
//addMockFunctionsToSchema({ schema, mocks });

export default schema;
