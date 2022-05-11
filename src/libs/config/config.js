/**
 * Application settings
 * @typedef {WifiSettings & MQTTSettings}
 */
const settings = {
  ...MQTTSettings,
  ...WifiSettings,
}

/**
 * WiFi Application Settings
 * @type {{WifiPrepared: boolean, WifiConnected: boolean, onWifiConnected: WifiSettings.onWifiConnected, SSID: string, Password: string, onWifiPrepared: WifiSettings.onWifiPrepared}}
 */
const WifiSettings = {
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
const MQTTSettings = {
  Identifier: '',
  MQTTPrepared: false,
  MQTTConnected: false,
  onMQTTPrepared: () => {},
  onMQTTConnected: () => {},
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

export const Config = new Proxy(settings, preparedStateHandler)
