import fastify from 'fastify';
import AutoLoad from 'fastify-autoload';
import path from 'path';

import container from '../../container';

const createServer = () => {
  const server = fastify({ logger: { prettyPrint: true } });

  // Autoload routes
  server.register(AutoLoad, {
    dir: path.join(__dirname, 'routes'),
  });

  // Add container in req object
  server.decorateRequest('container', container);

  // Add error function in reply object
  server.decorateReply('error', (reply, err) => {
    console.log(err);
    const { payload: error } = err.output;
    return reply.code(error.statusCode).send(error);
  });

  return server;
};

export default createServer;
