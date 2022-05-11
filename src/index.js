import config from './libs/config/index.js'
import dotenv from 'dotenv'
import { Pairing } from './libs/pairing/index.js'

dotenv.config()

const pairing = new Pairing(config)
