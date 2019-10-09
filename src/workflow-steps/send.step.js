import logger from '../lib/logger';

const step = (input) =>  {
    logger.info(`email send ${input.email}`);
    return input;
};

module.exports = step;