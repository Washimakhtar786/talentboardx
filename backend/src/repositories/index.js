import mongoJobRepo from './mongo/jobRepository.mongo.js';
import pgJobRepo from './postgres/jobRepository.pg.js';

const DB_TYPE = process.env.DB_TYPE || 'mongo';

const allowedTypes = ['mongo', 'postgres'];

if (!allowedTypes.includes(DB_TYPE)) {
  throw new Error(`Invalid DB_TYPE: ${DB_TYPE}`);
}

const isPostgres = DB_TYPE === 'postgres';

export const jobRepository = isPostgres ? pgJobRepo : mongoJobRepo;
