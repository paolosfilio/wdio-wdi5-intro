# WebdriverIO (WDIO) + WDI5
As [UIVeri5](https://github.com/SAP/ui5-uiveri5) is now depreciated, this project aims to provide:
- [examples](docs/EXAMPLES.md) of how to use WDIO + WDI5 for your E2E testing of UI5-based applications.
- a [migration guide](docs/MIGRATE.md) with some hints on how to convert you own UIVeri5 projects.

This project provides the [Teched2019-uiveri5](https://github.com/SAP-samples/teched2019-uiveri5/tree/solved) sample project migrated to WDI5. Please make sure to look at the **_solved_** branch of teched201-uiveri5 project as branch **_main_** does not contain the complete test.


# Requirements
To run the app, you need to have node and npm installed. 

# Download and Installation
To run the app you have to do following steps:
Clone the repo:
``` bash
$> git clone git@github.wdf.sap.corp:ui5delivery/uiveri5-to-wdi5.git
```
Than navigate into directory:
```bash
$> cd uiveri5-to-wdi5
```
Install dependencies:
```bash
$> npm install
```
To run tests just call the following npm script:
```bash
$> npm run test
```
# Support
This project is provided "as-is": there is no guarantee that raised issues will be answered or addressed in future releases.

# License
Copyright (c) 2021 SAP SE or an SAP affiliate company. All rights reserved. This project is licensed under the SAP Sample Code License, except as noted otherwise in the [LICENSE](LICENSE) file.
