import mongoJobRepo from './mongo/jobRepository.mongo.js';
import pgJobRepo from './postgres/jobRepository.pg.js';

import mongoUserRepo from './mongo/userRepository.mongo.js';
import pgUserRepo from './postgres/userRepository.pg.js';

import mongoApplicationRepo from './mongo/applicationRepository.mongo.js';
import pgApplicationRepo from './postgres/applicationRepository.pg.js';

const DB_TYPE = process.env.DB_TYPE || 'mongo';

const allowedTypes = ['mongo', 'postgres'];

if (!allowedTypes.includes(DB_TYPE)) {
  throw new Error(`Invalid DB_TYPE: ${DB_TYPE}`);
}

const isPostgres = DB_TYPE === 'postgres';

export const jobRepository = isPostgres
  ? pgJobRepo
  : mongoJobRepo;

export const userRepository = isPostgres
  ? pgUserRepo
  : mongoUserRepo;

export const applicationRepository = isPostgres
  ? pgApplicationRepo
  : mongoApplicationRepo;