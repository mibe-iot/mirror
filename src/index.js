import config from './libs/config/index.js'
import dotenv from 'dotenv'
import { MqttClient } from 'mqtt'
import { Pairing } from './libs/pairing/index.js'

dotenv.config()

/**
 * On MQTT connected callback
 * @param client {MqttClient}
 */
config.onMQTTConnected = (client) => {
  client.subscribe('*', (err) => {
    if (err) console.error(err)
  })
  client.on('message', (topic, message) => {
    console.log(message.toString())
  })
}

const pairing = new Pairing(config)
pairing.start()
