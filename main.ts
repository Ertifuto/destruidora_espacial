controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    projectile = sprites.createProjectileFromSprite(img`
        . . . . . . . . 
        . . . . . . . . 
        . . . . . . . . 
        . . . . . . . . 
        . . . 7 7 . . . 
        . . . 7 7 . . . 
        . . . 7 7 . . . 
        . . . 7 7 . . . 
        `, ship, 0, -140)
    projectile.startEffect(effects.coolRadial, 100)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite2, otherSprite2) {
    scene.cameraShake(4, 500)
    sprites.destroy(otherSprite2)
    info.changeLifeBy(-1)
})
info.onScore(1, function () {
    asteroids = [
    sprites.space.spaceSmallAsteroid1,
    sprites.space.spaceSmallAsteroid0,
    sprites.space.spaceAsteroid0,
    sprites.space.spaceAsteroid1,
    img`
        . . . . . . f f f . . . . . . . 
        . . . . . e e e f f f . . . . . 
        . . . f e e f e e e e f . . . . 
        . . f e e f f f e f f e f . . . 
        . f f e e e f e e e f f e f . . 
        . e e e e e e e e e e f e f f f 
        . e e e e e e e e e e e e f f f 
        . . e e e e f f e e e e f f f f 
        f . e e e e e f f e e e f f e f 
        f f e e e e e f f f e e e f e f 
        e f e e e f f e f e e e e e f . 
        e e f e e e e e f . f f e f . . 
        e e f f e e e e f . . . . . . . 
        e e e f e e e e . . . . . . . . 
        e e e e e e f . . . . . . . . . 
        . e e e f . . . . . . . . . . . 
        `,
    sprites.space.spaceAsteroid3,
    img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `
    ]
})
info.onLifeZero(function () {
    game.setGameOverEffect(false, effects.blizzard)
    game.gameOver(false)
    sprites.destroy(ship)
})
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Enemy, function (sprite, otherSprite) {
    info.changeScoreBy(1)
    sprites.destroy(otherSprite, effects.warmRadial, 500)
})
let projectile: Sprite = null
let ship: Sprite = null
let asteroids: Image[] = []
asteroids = [
sprites.space.spaceSmallAsteroid1,
sprites.space.spaceSmallAsteroid0,
sprites.space.spaceAsteroid0,
sprites.space.spaceAsteroid1,
sprites.space.spaceAsteroid4,
sprites.space.spaceAsteroid3,
img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `
]
ship = sprites.create(sprites.space.spaceRedShip, SpriteKind.Player)
ship.setStayInScreen(true)
ship.bottom = 120
controller.moveSprite(ship, 100, 100)
info.setScore(0)
info.setLife(3)
effects.starField.startScreenEffect()
game.onUpdateInterval(500, function () {
    projectile = sprites.createProjectileFromSide(asteroids[randint(0, asteroids.length - 1)], 0, 75)
    projectile.setKind(SpriteKind.Enemy)
    projectile.x = randint(10, 150)
})
