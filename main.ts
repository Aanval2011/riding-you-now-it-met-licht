let R = 0
let B = 0
let G = 0
let strip = false
let strip2 = neopixel.create(DigitalPin.P15, 4, NeoPixelMode.RGB)
basic.forever(function () {
    basic.showIcon(IconNames.Happy)
    if (maqueen.Ultrasonic(PingUnit.Centimeters) < 30 == (maqueen.Ultrasonic(PingUnit.Centimeters) != 0)) {
        strip = Math.randomBoolean()
        if (strip == true) {
            basic.showLeds(`
                . . # . .
                . # # . .
                # # # # #
                . # # . .
                . . # . .
                `)
            maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CW, 255)
            maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CW, 0)
            basic.pause(800)
            G += 1
            B += -1
            strip2.showColor(neopixel.rgb(R, G, B))
        }
        if (strip == false) {
            basic.showLeds(`
                . . # . .
                . . # # .
                # # # # #
                . . # # .
                . . # . .
                `)
            maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CW, 255)
            maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CW, 0)
            basic.pause(800)
            G += -1
            B += 1
            strip2.showColor(neopixel.rgb(R, G, B))
        }
    } else {
        maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CW, 255)
    }
})
basic.forever(function () {
    R = 0
    G = 0
    B = 0
})
