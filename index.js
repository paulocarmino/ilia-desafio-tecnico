import container from './src/container.js'

const app = container.cradle.app
const server = container.cradle.server

app(server)
