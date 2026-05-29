input.onButtonPressed(Button.A, function () {
    basic.showLeds(`
        # # . # #
        . . . . .
        # # # # #
        # . . . #
        . # # # .
        `)
    music.play(music.builtinPlayableSoundEffect(soundExpression.giggle), music.PlaybackMode.UntilDone)
    basic.showLeds(`
        # # . # #
        . . . . .
        # . . . #
        . # # # .
        . . . . .
        `)
    basic.showLeds(`
        # # . # #
        . . . . .
        # # # # #
        # . . . #
        . # # # .
        `)
    basic.showLeds(`
        # # . # #
        . . . . .
        # . . . #
        . # # # .
        . . . . .
        `)
    basic.showIcon(IconNames.Happy)
})
input.onSound(DetectedSound.Loud, function () {
    basic.showLeds(`
        . # . # .
        . . . . .
        . # # # .
        # . . . #
        # # # # #
        `)
    music.play(music.createSoundExpression(WaveShape.Noise, 5000, 5000, 255, 255, 500, SoundExpressionEffect.Vibrato, InterpolationCurve.Linear), music.PlaybackMode.UntilDone)
    basic.pause(500)
    music.stopAllSounds()
    basic.showLeds(`
        . # . # .
        . . . . .
        . . . . .
        . # # # .
        # . . . #
        `)
    music.play(music.createSoundExpression(
    WaveShape.Square,
    5000,
    1,
    255,
    0,
    500,
    SoundExpressionEffect.None,
    InterpolationCurve.Linear
    ), music.PlaybackMode.UntilDone)
    basic.pause(2000)
    music.play(music.createSoundExpression(WaveShape.Square, 838, 1, 255, 43, 500, SoundExpressionEffect.None, InterpolationCurve.Curve), music.PlaybackMode.UntilDone)
    basic.showLeds(`
        # # . # #
        . . . . .
        . . # . .
        . # . # .
        . . # . .
        `)
    basic.pause(2000)
    basic.showLeds(`
        . . . . .
        . # . # .
        . . . . .
        # . . . #
        . # # # .
        `)
})
input.onButtonPressed(Button.B, function () {
    basic.showLeds(`
        . # . # .
        . . . . .
        . # # # .
        . # . # .
        . # # # .
        `)
    music.play(music.createSoundExpression(
    WaveShape.Sawtooth,
    37,
    37,
    255,
    255,
    100,
    SoundExpressionEffect.None,
    InterpolationCurve.Curve
    ), music.PlaybackMode.UntilDone)
    basic.showLeds(`
        . # . # .
        . . . . .
        . . . . .
        . # # # .
        . . . . .
        `)
    basic.showLeds(`
        . # . # .
        . . . . .
        . # # # .
        . # . # .
        . # # # .
        `)
    music.play(music.createSoundExpression(
    WaveShape.Sawtooth,
    37,
    37,
    255,
    255,
    100,
    SoundExpressionEffect.None,
    InterpolationCurve.Curve
    ), music.PlaybackMode.UntilDone)
    basic.showLeds(`
        . # . # .
        . . . . .
        . . . . .
        . # # # .
        . . . . .
        `)
    basic.pause(1000)
    basic.showLeds(`
        . . . . .
        # # . # #
        . . . . .
        # . . . #
        . # # # .
        `)
    music.play(music.createSoundExpression(
    WaveShape.Square,
    527,
    927,
    255,
    30,
    500,
    SoundExpressionEffect.None,
    InterpolationCurve.Linear
    ), music.PlaybackMode.UntilDone)
    basic.showLeds(`
        . . . . .
        . # . # .
        . . . . .
        # . . . #
        . # # # .
        `)
})
input.onPinPressed(TouchPin.P1, function () {
    basic.clearScreen()
    music.stopAllSounds()
    basic.showLeds(`
        # # . # #
        . . . . .
        . . # . .
        . # . # .
        . . # . .
        `)
    music.play(music.builtinPlayableSoundEffect(soundExpression.yawn), music.PlaybackMode.UntilDone)
    basic.pause(3000)
    basic.showLeds(`
        . . . . .
        # # . # #
        . . . . .
        . # # # .
        . . . . .
        `)
    music.play(music.stringPlayable("E E G G G E E E ", 281), music.PlaybackMode.UntilDone)
    music.play(music.stringPlayable("G G G G E G C5 C5 ", 281), music.PlaybackMode.UntilDone)
    music.play(music.stringPlayable("B B A A A A G G ", 281), music.PlaybackMode.UntilDone)
    music.play(music.stringPlayable("D E F F F F D E ", 281), music.PlaybackMode.UntilDone)
    music.play(music.stringPlayable("F F F F D F B A ", 281), music.PlaybackMode.UntilDone)
    music.play(music.stringPlayable("G G B B C5 C5 C5 C5 ", 281), music.PlaybackMode.UntilDone)
    music.play(music.stringPlayable("C5 C5 - - - - - - ", 281), music.PlaybackMode.UntilDone)
})
input.onGesture(Gesture.Shake, function () {
    music.play(music.createSoundExpression(WaveShape.Square, 5000, 5000, 255, 255, 5000, SoundExpressionEffect.Vibrato, InterpolationCurve.Linear), music.PlaybackMode.LoopingInBackground)
    basic.showLeds(`
        . # . # .
        . . . . .
        . # # # .
        # . . . #
        # # # # #
        `)
    basic.pause(5000)
    music.stopAllSounds()
    basic.showLeds(`
        . . . . .
        # # . # #
        . . . . .
        . # # # .
        # . . . #
        `)
    music.play(music.createSoundExpression(
    WaveShape.Square,
    5000,
    1,
    255,
    0,
    1000,
    SoundExpressionEffect.None,
    InterpolationCurve.Linear
    ), music.PlaybackMode.UntilDone)
    basic.pause(1000)
    music.play(music.stringPlayable("E B C5 A B G A F ", 220), music.PlaybackMode.UntilDone)
    music.play(music.stringPlayable("C5 A G G F E D C ", 220), music.PlaybackMode.UntilDone)
    music.play(music.stringPlayable("C5 A C5 B C5 A G F ", 199), music.PlaybackMode.UntilDone)
    music.play(music.stringPlayable("E E D E C C C C5 ", 219), music.PlaybackMode.UntilDone)
    basic.pause(1000)
    basic.showString("You killed the baby!")
    basic.clearScreen()
})
input.onSound(DetectedSound.Quiet, function () {
    basic.pause(60000)
    basic.showLeds(`
        . . . . .
        # . # . .
        . . . . .
        . # # # .
        # . . . #
        `)
    basic.pause(1000)
    basic.showLeds(`
        . . . . .
        . . # . #
        . . . . .
        . # # # .
        # . . . #
        `)
    basic.pause(1000)
    basic.showLeds(`
        . . . . .
        . # . # .
        . . . . .
        . # # # .
        # . . . #
        `)
    basic.pause(2000)
    basic.clearScreen()
    basic.showLeds(`
        # # . # #
        . . . . .
        . # # # .
        # . . . #
        # # # # #
        `)
    basic.clearScreen()
    basic.showLeds(`
        # # . # #
        . . . . .
        . # # # .
        # . . . #
        # # # # #
        `)
    basic.clearScreen()
    basic.showLeds(`
        # # . # #
        . . . . .
        . # # # .
        # . . . #
        # # # # #
        `)
    music.play(music.createSoundExpression(
    WaveShape.Sawtooth,
    4399,
    4509,
    255,
    255,
    15000,
    SoundExpressionEffect.None,
    InterpolationCurve.Logarithmic
    ), music.PlaybackMode.UntilDone)
    basic.clearScreen()
    music.stopAllSounds()
    basic.showString("He is alone, you upset the baby")
})
input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    basic.showIcon(IconNames.Happy)
    music.play(music.stringPlayable("C E G B B B C5 C ", 199), music.PlaybackMode.UntilDone)
})
basic.showIcon(IconNames.Happy)
music.play(music.stringPlayable("C E G B B B C5 C ", 199), music.PlaybackMode.UntilDone)
basic.pause(15000)
basic.showLeds(`
    # # . # #
    . . . . .
    . . # . .
    . # . # .
    . . # . .
    `)
music.play(music.builtinPlayableSoundEffect(soundExpression.yawn), music.PlaybackMode.UntilDone)
basic.pause(1000)
basic.showLeds(`
    . . . . .
    # # . # #
    . . . . .
    . # # # .
    . . . . .
    `)
