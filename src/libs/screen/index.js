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
          return [value, '+']
        }
        return [value, '-']
      })
    )
    this.screen.render()
  }

  initializePairingWindow() {
    this.pairingTable = blessed.table({
      height: '13%',
      width: '15%',
      top: 'center',
      left: 'center',
      ...defaultStyle,
    })
    this.screen.append(this.pairingTable)
    this.pairingTable.setLabel('Connections')
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

    const rpiApiUrl = blessed.text({
      top: '2%',
      left: '16%',
      content:
        'Raspberry Pi Server Api Endpoint: ' + process.env.RPI_SERVER_API_URL,
    })

    this.screen.append(rpiApiUrl)

    const infoBox = blessed.log({
      width: '100%',
      height: '87%',
      top: '13%',
      ...defaultStyle,
    })

    client.subscribe('*', (err) => {
      if (err) console.error(err)
    })

    client.on('message', (topic, message) => {
      infoBox.add(`Topic: ${topic}; Message: ${message.toString()}`)
    })

    this.screen.append(infoBox)
    this.screen.render()
  }
}
