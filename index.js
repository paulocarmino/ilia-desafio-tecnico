import container from './src/container.js';

const { app, server } = container.cradle;

app({ server });
