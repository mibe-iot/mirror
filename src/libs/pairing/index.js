import ble from 'ble-peripheral'
import Wifi from 'rpi-wifi-connection'
import mqtt from 'mqtt'
import { Settings } from '../config/index.js'

export class Pairing {
  /**
   * Constructor which creates BLE service
   * @param config {Settings}
   */
  constructor(config) {
    this.config = config
    this.config.onWifiPrepared = this.connectToWifi.bind(this)
    this.config.onMQTTPrepared = this.connectToMQTT.bind(this)
  }

  start() {
    this.service = new ble(
      process.env.DBUS_SERVICE_NAME,
      process.env.BLE_SERVICE_UUID,
      this.initializeCharacteristics.bind(this)
    )
    this.service.on('ConnectionChange', (connected) => {
      if (connected !== true) return
      if (this.service.client.paired !== true) return
      this.config.onBLEConnected()
    })
  }

  connectToMQTT() {
    const client = mqtt.connect('mqtt://thinker.local')
    client.on('connect', () => {
      this.config.onMQTTConnected(client)
    })
  }

  connectToWifi() {
    const wifi = new Wifi()

    wifi.connect(
      {
        ssid: this.config.SSID,
        password: this.config.Password,
      }).then(() => {
        this.config.WifiConnected = true
        this.config.onWifiConnected()
      }
    )
  }

  initializeCharacteristics() {
    const uuids = [
      [process.env.BLE_CHARACTERISTIC_SSID_UUID, 'SSID'],
      [process.env.BLE_CHARACTERISTIC_PASSWORD_UUID, 'Password'],
      [process.env.BLE_CHARACTERISTIC_IDENTIFIER_UUID, 'Identifier'],
    ]

    uuids.forEach((uuid) => {
      const characteristic = this.service.Characteristic(...uuid, [
        'write-without-response',
      ])
      characteristic.on(
        'WriteValue',
        (device, value) => (this.config[uuid[1]] = value.toString())
      )
    })
  }
}
