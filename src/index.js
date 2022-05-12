import config from './libs/config/index.js'
import dotenv from 'dotenv'
import { MqttClient } from 'mqtt'
import { Pairing } from './libs/pairing/index.js'
import { Screen } from './libs/screen/index.js'

dotenv.config()

const screen = new Screen()
const pairing = new Pairing(config)

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
  screen.pairingStepConfigured('MQTT')
  screen.initializeMqttWindow(client)
}

config.onBLEConnected = () => {
  screen.pairingStepConfigured('BLE')
}

config.onWifiConnected = () => {
  screen.pairingStepConfigured('Wi-Fi')
}

pairing.start()
screen.initializePairingWindow()
