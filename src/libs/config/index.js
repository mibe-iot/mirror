/**
 * WiFi Application Settings
 * @type {{WifiPrepared: boolean, WifiConnected: boolean, onWifiConnected: onWifiConnected, SSID: string, Password: string, onWifiPrepared: onWifiPrepared}}
 */
export const WifiSettings = {
  SSID: '',
  Password: '',
  WifiPrepared: false,
  WifiConnected: false,
  /**
   * @callback onWifiPrepared
   */
  onWifiPrepared: () => {},
  /**
   * @callback onWifiConnected
   */
  onWifiConnected: () => {},
}

/**
 * MQTT Application Settings
 * @type {{Identifier: string, onMQTTPrepared: onMQTTPrepared, MQTTConnected: boolean, onMQTTConnected: onMQTTConnected, MQTTPrepared: boolean}}
 */
export const MQTTSettings = {
  Identifier: '',
  MQTTPrepared: false,
  MQTTConnected: false,
  /**
   * @callback onMQTTPrepared
   */
  onMQTTPrepared: () => {},
  /**
   * @callback onMQTTConnected
   */
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

/**
 * Application settings
 * @typedef {BLESettings & WifiSettings & MQTTSettings}
 */
export const Settings = {
  ...BLESettings,
  ...WifiSettings,
  ...MQTTSettings,
}

const preparedStateHandler = {
  set(target, prop, value, receiver) {
    const result = Reflect.set(...arguments)
    if (target.SSID && target.Password && !target.WifiPrepared) {
      target.WifiPrepared = true
      target.onWifiPrepared()
    }
    if (target.Identifier && !target.MQTTPrepared && target.WifiConnected) {
      target.MQTTPrepared = true
      target.onMQTTPrepared()
    }
    return result
  },
}

export default new Proxy(Settings, preparedStateHandler)
