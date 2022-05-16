# Changelog

All notable changes to this project will be documented in this file.

### [2.1.4](https://github.com/mibe-iot/mirror/compare/v2.1.3...v2.1.4) (2022-05-16)


### Bug Fixes

* **env:** add default value for `DBUS_SERVICE_NAME` ([12e766c](https://github.com/mibe-iot/mirror/commit/12e766c07aefabe889a4cc53fdb42138905cc0a4))
* **resources:** add `dbus` config for application ([c01818b](https://github.com/mibe-iot/mirror/commit/c01818be68140b4a647bcad1a5f281526cbc8548))
* **screen:** replace `utf8` icons with `ascii` characters ([de53255](https://github.com/mibe-iot/mirror/commit/de53255f34f4f0771d4e2081823b29c3b0cc5db5))

### [2.1.3](https://github.com/mibe-iot/mirror/compare/v2.1.2...v2.1.3) (2022-05-16)


### Bug Fixes

* **pairing:** replace `password` with `psk` ([db99c7f](https://github.com/mibe-iot/mirror/commit/db99c7f937a0a199fc9f9f695b66e097397f1d8f))

### [2.1.2](https://github.com/mibe-iot/mirror/compare/v2.1.1...v2.1.2) (2022-05-16)


### Bug Fixes

* **pairing:** shared context ([d60f334](https://github.com/mibe-iot/mirror/commit/d60f334adf654aeda246dbe6a6707950dd5cf0ca))

### [2.1.1](https://github.com/mibe-iot/mirror/compare/v2.1.0...v2.1.1) (2022-05-13)


### Bug Fixes

* **pairing:** bind this to characteristic initializer ([97e876d](https://github.com/mibe-iot/mirror/commit/97e876df9e1d41e093ee85d721cd05252c8a42a3))

## [2.1.0](https://github.com/mibe-iot/mirror/compare/v2.0.0...v2.1.0) (2022-05-12)


### Features

* **screen:** add subscribers & blessed log box ([a9f7ad8](https://github.com/mibe-iot/mirror/commit/a9f7ad8e65db027bb0c7f3fd9414c2f9931daa02))
* **screen:** create library for screen management ([cdd2e0f](https://github.com/mibe-iot/mirror/commit/cdd2e0f47da1d6aa21f431073e9375ba7f7fbe04))
* **screen:** create screen library ([#3](https://github.com/mibe-iot/mirror/issues/3)) ([82cf088](https://github.com/mibe-iot/mirror/commit/82cf0884bd6679ce6d9312e10ea0f7ad64e9c53e))
* **screen:** integrate library for screen management ([42c566c](https://github.com/mibe-iot/mirror/commit/42c566c293475fdc5be21bd573d76967748ffcbe))


### Bug Fixes

* **main:** remove mqtt subscribers from connected callback ([d5fd85d](https://github.com/mibe-iot/mirror/commit/d5fd85d28df7812969fd06ef3cb068bf8a095460))

## [2.0.0](https://github.com/mibe-iot/mirror/compare/v1.3.1...v2.0.0) (2022-05-11)


### ⚠ BREAKING CHANGES

* **deps:** added `node-wifi` package for working with Wi-Fi

### Features

* **main:** integrate business logic ([faec158](https://github.com/mibe-iot/mirror/commit/faec15823a511a190821ed282875db0fd8182cf2))
* **pairing:** add MQTT and Wi-Fi support ([a40e9f9](https://github.com/mibe-iot/mirror/commit/a40e9f9a56ac3034b6d85db5c9055d6dcdbb8a22))
* **pairing:** add Wi-Fi and MQTT connectors ([04d2239](https://github.com/mibe-iot/mirror/commit/04d22395473c77e8c9f977aecb9afe7785fc164e))


### Bug Fixes

* **config:** add Wi-Fi connected option for MQTT prepared ([8062d7f](https://github.com/mibe-iot/mirror/commit/8062d7f8a3fe21af0c229ad0684ad12dfee0eaa5))
* **workflows:** add branches to release workflow ([8f09258](https://github.com/mibe-iot/mirror/commit/8f09258e9b93cf046b8c04c34def6e80928c173d))


### Build System

* **deps:** add `node-wifi` module ([0d953e6](https://github.com/mibe-iot/mirror/commit/0d953e6115a7fa730640f8ac345bbe6b285a3b6e))

## [2.0.0-beta.3](https://github.com/mibe-iot/mirror/compare/v2.0.0-beta.2...v2.0.0-beta.3) (2022-05-11)


### Features

* **main:** integrate business logic ([faec158](https://github.com/mibe-iot/mirror/commit/faec15823a511a190821ed282875db0fd8182cf2))
* **pairing:** add Wi-Fi and MQTT connectors ([04d2239](https://github.com/mibe-iot/mirror/commit/04d22395473c77e8c9f977aecb9afe7785fc164e))

## [2.0.0-beta.2](https://github.com/mibe-iot/mirror/compare/v2.0.0-beta.1...v2.0.0-beta.2) (2022-05-11)


### Bug Fixes

* **config:** add Wi-Fi connected option for MQTT prepared ([8062d7f](https://github.com/mibe-iot/mirror/commit/8062d7f8a3fe21af0c229ad0684ad12dfee0eaa5))

## [2.0.0-beta.1](https://github.com/mibe-iot/mirror/compare/v1.3.1...v2.0.0-beta.1) (2022-05-11)


### ⚠ BREAKING CHANGES

* **deps:** added `node-wifi` package for working with Wi-Fi

### Bug Fixes

* **workflows:** add branches to release workflow ([8f09258](https://github.com/mibe-iot/mirror/commit/8f09258e9b93cf046b8c04c34def6e80928c173d))


### Build System

* **deps:** add `node-wifi` module ([0d953e6](https://github.com/mibe-iot/mirror/commit/0d953e6115a7fa730640f8ac345bbe6b285a3b6e))

### [1.3.1](https://github.com/mibe-iot/mirror/compare/v1.3.0...v1.3.1) (2022-05-11)


### Bug Fixes

* **workflows:** add branches to release workflow ([a9ac8c9](https://github.com/mibe-iot/mirror/commit/a9ac8c9f62e28ff6be9f90146bbc1c29ec6565cf))

## [1.3.0](https://github.com/mibe-iot/mirror/compare/v1.2.0...v1.3.0) (2022-05-11)


### Features

* **config:** add BLE app settings ([f289f08](https://github.com/mibe-iot/mirror/commit/f289f08d8bcd35a32882a0618e43713ac8d875de))
* **main:** integrate pairing module ([1f6900e](https://github.com/mibe-iot/mirror/commit/1f6900e713064a25b1c96bfa4967ea2d0d6b8b24))
* **pairing:** add pairing module ([7c95701](https://github.com/mibe-iot/mirror/commit/7c9570150e382845c6be11f842364239d475fe38))


### Bug Fixes

* **ble:** remove separated module ([a806710](https://github.com/mibe-iot/mirror/commit/a80671050d2ace25483ed3b0e714b845294635cd))
* **config:** change settings priority ([00d6e4c](https://github.com/mibe-iot/mirror/commit/00d6e4cfa8453e05429f29937b3c4a334d1ff47b))

## [1.2.0](https://github.com/mibe-iot/mirror/compare/v1.1.0...v1.2.0) (2022-05-11)


### Features

* **config:** add callbacks for MQTT and Wi-Fi ([b34e414](https://github.com/mibe-iot/mirror/commit/b34e41467ee82b153cc8a9d109e4e37750a2b6d4))

## [1.1.0](https://github.com/mibe-iot/mirror/compare/v1.0.0...v1.1.0) (2022-05-11)


### Features

* **config:** initialize default configuration ([3ac3e96](https://github.com/mibe-iot/mirror/commit/3ac3e96b70451048a7b7f7ee3b89cdde386f181f))
* **environment:** pass environment variables to app ([7ecfd93](https://github.com/mibe-iot/mirror/commit/7ecfd93c5caab3a843caeac7a1623892c2bbcd06))
* **git:** ignore `.env` file with credentials ([f169c00](https://github.com/mibe-iot/mirror/commit/f169c003311099db25e1ea9b8110c4601d19d9a8))
* **workflows:** add CodeQL analysis ([7cb840b](https://github.com/mibe-iot/mirror/commit/7cb840bc574124fdea06673294a8fd000c60dc3f))


### Bug Fixes

* prettier tabwidth ([ee23389](https://github.com/mibe-iot/mirror/commit/ee23389d20173c7ca2add649a2ee01871d44a2ff))

## 1.0.0 (2022-05-11)


### Features

* initial commit ([1db7999](https://github.com/mibe-iot/mirror/commit/1db7999da888b9d8ce21508ac3d5bfc41358b303))
* **workflows:** initial semantic release ([e8d543c](https://github.com/mibe-iot/mirror/commit/e8d543c4723e9ecf780dee128d257e4c0ea6a656))
