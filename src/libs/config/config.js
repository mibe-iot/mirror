/**
 * Application settings
 * @typedef {WifiSettings & MQTTSettings}
 */
const settings = {
  ...MQTTSettings,
  ...WifiSettings,
}

/**
 * WiFi Settings
 * @type {{WifiPrepared: boolean, WifiConnected: boolean, SSID: string, Password: string}}
 */
const WifiSettings = {
  SSID: '',
  Password: '',
  WifiPrepared: false,
  WifiConnected: false,
}

/**
 * MQTT Settings
 * @type {{Identifier: string, MQTTConnected: boolean, MQTTPrepared: boolean}}
 */
const MQTTSettings = {
  Identifier: '',
  MQTTPrepared: false,
  MQTTConnected: false,
}

const preparedStateHandler = {
  set(target, prop, value, receiver) {
    const result = Reflect.set(...arguments)
    if (target.SSID && target.Password && !target.WifiPrepared) {
      target.WifiPrepared = true
    }
    if (target.Identifier && !target.MQTTPrepared) {
      target.MQTTPrepared = true
    }
    return result
  },
}

export const Config = new Proxy(settings, preparedStateHandler)
