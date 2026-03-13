/* Copyright (c) 2020 MTHS All rights reserved
 *
 * Created by: Matthew Carnaffan
 * Created on: Feb 2026
 * This program messures light level and displays with neopixels
*/

//creation of variables for acess
let myStrip: neopixel.Strip = null
myStrip = neopixel.create(DigitalPin.P16, 4, NeoPixelMode.RGB)

//clean up
basic.clearScreen()
basic.showIcon(IconNames.Happy)
pins.digitalWritePin(DigitalPin.P16, 1)
basic.clearScreen()
basic.showIcon(IconNames.Happy)
myStrip.setPixelColor(0, neopixel.colors(NeoPixelColors.Black))
myStrip.setPixelColor(1, neopixel.colors(NeoPixelColors.Black))
myStrip.setPixelColor(2, neopixel.colors(NeoPixelColors.Black))
myStrip.setPixelColor(3, neopixel.colors(NeoPixelColors.Black))
myStrip.show()

