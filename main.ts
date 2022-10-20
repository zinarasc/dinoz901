input.onButtonPressed(Button.A, function () {
    cabeza_dino.change(LedSpriteProperty.Y, -1)
    pies_dino.change(LedSpriteProperty.Y, -1)
    basic.pause(1000)
    cabeza_dino.change(LedSpriteProperty.Y, 1)
    pies_dino.change(LedSpriteProperty.Y, 1)
})
function piedra () {
    piedrita = game.createSprite(4, 4)
    for (let index = 0; index < 4; index++) {
        basic.pause(1000)
        piedrita.change(LedSpriteProperty.X, -1)
        if (piedrita.isTouching(pies_dino)) {
            basic.showIcon(IconNames.Sad)
            music.startMelody(music.builtInMelody(Melodies.Dadadadum), MelodyOptions.Once)
            piedra()
        }
    }
}
let piedrita: game.LedSprite = null
let cabeza_dino: game.LedSprite = null
let pies_dino: game.LedSprite = null
pies_dino = game.createSprite(0, 4)
cabeza_dino = game.createSprite(0, 3)
piedra()
basic.forever(function () {
    if (piedrita.isTouchingEdge()) {
        basic.pause(1000)
        piedrita.delete()
        piedra()
    }
})
