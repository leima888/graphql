import { Case, Sample } from './connectors';

const resolvers = {
  Query: {
    sample(_, args) {
      return Sample.find({ where: args, include: [Case] });
    },
    allSamples(_, args) {
      return Sample.findAll({ include: [Case]  });
    },
    case(_, args) {
      return Case.find({ where: args, include: [Sample]  });
    },
    allCases(_, args) {
      return Case.findAll({ include: [Sample]  });
    }
  }
};

export default resolvers;