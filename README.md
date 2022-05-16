# Mibe IoT Mirror

IoT Mirror

## Requirements

* device Raspberry Pi Zero W
* installed Raspberry Pi OS (Legacy)
* BlueZ >= 5.47
* Node.js >= 12.22.0 && npm >= 6.5.2
* installed `libdbus-1-dev` and `libglib2.0-dev` dependencies

## How to run

1. `git clone https://github.com/mibe-iot/mirror && cd mirror`
2. `sudo mv resources/mirrorApp.conf /etc/dbus-1/system.d/`
3. `npm i`
4. `node src/index`
