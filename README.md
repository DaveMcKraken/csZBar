
# ZBar Barcode Scanner Plugin

This plugin integrates with the [ZBar](http://zbar.sourceforge.net/) library,
exposing a JavaScript interface for scanning barcodes (QR, 2D, etc). This repo has been forked from [AshleyDeng's repository](https://github.com/AshleyDeng/csZBar)
In this fork, the camera preview on Android is now in a window, defaulting to the top half of the screen. The camera preview is now also kept active, returning results continually instead of closing after one result returned. Lastly there is also now a cancel button in the window, allowing the preview to be closed either from the preview or from an external signal (back button, programmatically, etc).

## Installation

    cordova plugin add cordova-plugin-cszbar

## API

### Scan barcode

    cloudSky.zBar.scan(params, onSuccess, onFailure)

Arguments:

- **params**: Optional parameters:

    ```javascript
    {
        text_title: "OPTIONAL Title Text - default = 'Scan QR Code'", // Android only
        text_instructions: "OPTIONAL Instruction Text - default = 'Please point your camera at the QR code.'", // Android only
        camera: "front" || "back" // defaults to "back"
        flash: "on" || "off" || "auto" // defaults to "auto". See Quirks
        height: 0.1-1.0 (Float) //defaults to 0.5, Android only
    }
    ```

- **onSuccess**: function (s) {...} _Callback for successful scan._
- **onFailure**: function (s) {...} _Callback for cancelled scan or error._

Return:

- success('scanned bar code') _Successful scan with value of scanned code_
- error('cancelled') _If user cancelled the scan (with back button etc)_
- error('misc error message') _Misc failure_

### Scan barcode

    cloudSky.zBar.cancel()

Return:

- success('cancelled') _Successfully cancelled_
- error('misc error message') _Misc failure_

Status:

- Android: DONE
- iOS: DONE


## LICENSE [Apache 2.0](LICENSE.md)

This plugin is released under the Apache 2.0 license, but the ZBar library on which it depends (and which is distribute with this plugin) is under the LGPL license (2.1).


## Thanks

Thank you to @PaoloMessina and @nickgerman for code contributions.
