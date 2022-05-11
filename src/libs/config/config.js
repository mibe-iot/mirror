/**
 * Application settings
 * @typedef {BLESettings & WifiSettings & MQTTSettings}
 */
export const Settings = {
  ...BLESettings,
  ...WifiSettings,
  ...MQTTSettings,
}

/**
 * WiFi Application Settings
 * @type {{WifiPrepared: boolean, WifiConnected: boolean, onWifiConnected: WifiSettings.onWifiConnected, SSID: string, Password: string, onWifiPrepared: WifiSettings.onWifiPrepared}}
 */
export const WifiSettings = {
  SSID: '',
  Password: '',
  WifiPrepared: false,
  WifiConnected: false,
  onWifiPrepared: () => {},
  onWifiConnected: () => {},
}

/**
 * MQTT Application Settings
 * @type {{Identifier: string, onMQTTPrepared: MQTTSettings.onMQTTPrepared, MQTTConnected: boolean, onMQTTConnected: MQTTSettings.onMQTTConnected, MQTTPrepared: boolean}}
 */
export const MQTTSettings = {
  Identifier: '',
  MQTTPrepared: false,
  MQTTConnected: false,
  onMQTTPrepared: () => {},
  onMQTTConnected: () => {},
}

/**
 * BLE Application Settings
 * @type {{onBLEConnected: onBLEConnected}}
 */
export const BLESettings = {
  /**
   * @callback onBLEConnected
   */
  onBLEConnected: () => {},
}

const preparedStateHandler = {
  set(target, prop, value, receiver) {
    const result = Reflect.set(...arguments)
    if (target.SSID && target.Password && !target.WifiPrepared) {
      target.WifiPrepared = true
      target.onWifiPrepared()
    }
    if (target.Identifier && !target.MQTTPrepared) {
      target.MQTTPrepared = true
      target.onMQTTPrepared()
    }
    return result
  },
}

export default new Proxy(Settings, preparedStateHandler)
