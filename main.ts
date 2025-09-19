basic.showLeds(`
    # # # . #
    . . # . #
    # # # # #
    # . # . .
    # . # # #
    `)
loops.everyInterval(1000, function () {
    basic.showLeds(`
        # # # . #
        . . # . #
        # # # # #
        # . # . .
        # . # # #
        `)
})
basic.forever(function () {
    basic.showString("HEIL HITLER")
})
