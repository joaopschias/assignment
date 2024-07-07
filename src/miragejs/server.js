import { createServer } from 'miragejs';
import models from './models';
import fixtures from './fixtures';
import routes from './routes';
import seeds from './seeds';

const makeServer = ({ environment = 'development' } = {}) => {
  return createServer({
    environment,
    models,
    fixtures,
    seeds,
    routes,
  });
};

export default makeServer;
