import dotenv from 'dotenv'
dotenv.config({ path: './.env.local' })

export default {
  logLevel: process.env.LOG_LEVEL
}
