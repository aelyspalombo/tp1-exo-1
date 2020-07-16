input.onButtonPressed(Button.A, function () {
    led.unplot(x, y)
    x = x - 1
    led.plot(x, y)
})
input.onButtonPressed(Button.B, function () {
    led.unplot(x, y)
    x = x + 1
    led.plot(x, y)
})
let y = 0
let x = 0
x = 0
y = 0
led.plot(x, y)
basic.forever(function () {
    basic.pause(1000)
    led.unplot(x, y)
    x = x + 1
    led.plot(x, y)
    if (x == 4) {
        while (x != 0) {
            basic.pause(1000)
            led.unplot(x, y)
            x = x - 1
            led.plot(x, y)
        }
    }
})
