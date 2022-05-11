import ble from 'ble-peripheral'
import { Settings } from '../config/index.js'

export class Pairing {
  /**
   * Constructor which creates BLE service
   * @param config {Settings}
   */
  constructor(config) {
    this.config = config
    this.service = new ble(
      process.env.DBUS_SERVICE_NAME,
      process.env.BLE_SERVICE_UUID,
      this.initializeCharacteristics
    )
    this.service.on('ConnectionChange', (connected) => {
      if (connected !== true) return
      if (this.service.client.paired !== true) return
      this.config.onBLEConnected()
    })
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
