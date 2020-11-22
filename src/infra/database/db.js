import knex from 'knex'
import knexfile from '../../../knexfile.js'
const stack = process.env.STACK || 'development'
const db = knex(knexfile[stack])

export default db
