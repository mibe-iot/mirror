import blessed from 'blessed'
import { defaultStyle } from './styles.js'
import { MqttClient } from 'mqtt'

const pairingSteps = ['BLE', 'Wi-Fi', 'MQTT']

export class Screen {
  constructor() {
    this.screen = blessed.screen({
      smartCSR: true,
    })
    this.screen.title = 'Mibe IoT Mirror'
    this.screen.key(['escape', 'q', 'C-c'], () => {
      return process.exit(0)
    })
  }

  /**
   * Set step configured
   * @param step {string}
   */
  pairingStepConfigured(step) {
    let flag = !pairingSteps.includes(step)
    this.pairingTable.setData(
      pairingSteps.map((value) => {
        if (!flag) {
          if (value === step) flag = true
          return [value, '✓']
        }
        return [value, '✕']
      })
    )
    this.screen.render()
  }

  initializePairingWindow() {
    this.pairingTable = blessed.table({
      height: '13%',
      top: 'center',
      left: 'center',
      ...defaultStyle,
    })
    this.screen.append(this.pairingTable)
    this.pairingStepConfigured('')
  }

  /**
   * MQTT Window initializer
   * @param client {MqttClient}
   */
  initializeMqttWindow(client) {
    this.pairingTable.top = '0'
    this.pairingTable.left = '0'
    this.screen.render()

    this.client = client

    const infoBox = blessed.box({
      width: '25%',
      height: '25%',
      top: '13%',
      ...defaultStyle,
    })

    this.screen.append(infoBox)
    this.screen.render()
  }
}
