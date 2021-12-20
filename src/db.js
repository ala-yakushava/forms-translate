import Sequelize from 'sequelize';
import sequelize_fixtures from 'sequelize-fixtures';
import { logger } from './utils/logger';
import { username, password, database, host, dialect } from './config';
import { fixtures } from './fixtures';

export const sequelize = new Sequelize(database, username, password, {
  dialect, host
});

export const connect = async () => {
  try {
    await sequelize.authenticate();
    logger.info('Connection has been established successfully.');
  } catch (error) {
    logger.error('Unable to connect to the database:', error);
  }
};

export const sync = async () => {
  try {
    await sequelize.sync({ alter: true });
    logger.info('Sync all defined models to the DB.');
    await sequelize_fixtures.loadFixtures(fixtures, sequelize.models);
    logger.info('Seed data to the DB.');
  } catch (error) {
    logger.error('Unable to sync to the database:', error);
  }
};

export const drop = async () => {
  try {
    await sequelize.drop();
    logger.info('All tables dropped!');
  } catch (error) {
    logger.error('Unable to drop to the database:', error);
  }
};

export const close = async () => {
  try {
    await sequelize.close();
    logger.info('Connection closed.');
  } catch (error) {
    logger.error('Unable to close to the database:', error);
  }
};
