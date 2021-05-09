namespace SpriteKind {
    export const Noone = SpriteKind.create()
    export const invisible = SpriteKind.create()
    export const interactua = SpriteKind.create()
    export const enemysuperpoweroso = SpriteKind.create()
    export const invisible2 = SpriteKind.create()
    export const amigos = SpriteKind.create()
}
controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    lumen = sprites.createProjectileFromSprite(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . 4 5 5 4 . . . . . . 
        . . . . . . 5 5 4 4 . . . . . . 
        . . . . . . 2 4 4 2 . . . . . . 
        . . . . . . 2 2 2 2 . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, cuatro, 50, 0)
})
controller.up.onEvent(ControllerButtonEvent.Repeated, function () {
    Dreynen = sprites.createProjectileFromSprite(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . 9 . 9 . . 9 . . . . . . . 
        . 9 . . . . . . . 9 . . . . . . 
        . . 9 f f f f f f . 9 . . . . . 
        . . . f f f f . . . 9 . . . . . 
        . . 9 . . . . 9 . 9 . . . . . . 
        . . . . 9 . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, cuatro, 50, 0)
    lumen = sprites.createProjectileFromSprite(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . 4 5 5 4 . . . . . . 
        . . . . . . 5 5 4 4 . . . . . . 
        . . . . . . 2 4 4 2 . . . . . . 
        . . . . . . 2 2 2 2 . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, cuatro, 50, 0)
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    if (cuatro.vy == 0) {
        cuatro.vy += -100
    }
    animation.stopAnimation(animation.AnimationTypes.All, cuatro)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.enemysuperpoweroso, function (sprite, otherSprite) {
    info.changeLifeBy(-3)
    tiles.placeOnTile(cuatro, tiles.getTileLocation(19, 14))
})
controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    animation.runImageAnimation(
    cuatro,
    [img`
        . . . . . f f f f f . . . 
        . . . f f f f f f f f f . 
        . . f f f c f f f f f f . 
        . . f f c f f f c f f f f 
        f f c c f f f c c f f c f 
        f f f f f e f f f f c c f 
        . f f f e e f f f f f f f 
        . . f f e e f b f e e f f 
        . . . f 4 4 f 1 e 4 e f . 
        . . . f 4 4 4 4 e f f f . 
        . . . f f e e e e e f . . 
        . . . f 7 7 7 e 4 4 e . . 
        . . . f 7 7 7 e 4 4 e . . 
        . . . f 6 6 6 f e e f . . 
        . . . . f f f f f f . . . 
        . . . . . . f f f . . . . 
        `,img`
        . . . . . . . . . . . . . 
        . . . . f f f f f f . . . 
        . . . f f f f f f f f f . 
        . . f f f c f f f f f f . 
        . f f f c f f f c f f f f 
        f f c c f f f c c f f c f 
        f f f f f e f f f f c c f 
        . f f f e e f f f f f f f 
        . . f f e e f b f e e f f 
        . . f f 4 4 f 1 e 4 e f . 
        . . . f 4 4 4 e e f f f . 
        . . . f f e e 4 4 e f . . 
        . . . f 7 7 e 4 4 e f . . 
        . . f f 6 6 f e e f f f . 
        . . f f f f f f f f f f . 
        . . . f f f . . . f f . . 
        `,img`
        . . . . . . . . . . . . . 
        . . . . f f f f f f . . . 
        . . . f f f f f f f f f . 
        . . f f f c f f f f f f . 
        . f f f c f f f c f f f f 
        f f c c f f f c c f f c f 
        f f f f f e f f f f c c f 
        . f f f e e f f f f f f f 
        . f f f e e f b f e e f f 
        . . f f 4 4 f 1 e 4 e f f 
        . . . f 4 4 4 4 e f f f . 
        . . . f f e e e e 4 4 4 . 
        . . . f 7 7 7 7 e 4 4 e . 
        . . f f 6 6 6 6 f e e f . 
        . . f f f f f f f f f f . 
        . . . f f f . . . f f . . 
        `],
    100,
    true
    )
})
controller.right.onEvent(ControllerButtonEvent.Released, function () {
    animation.stopAnimation(animation.AnimationTypes.All, cuatro)
})
controller.left.onEvent(ControllerButtonEvent.Released, function () {
    animation.stopAnimation(animation.AnimationTypes.All, cuatro)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.invisible, function (sprite, otherSprite) {
    game.showLongText("¡Mira un Mogadoriano! Bueno, si es solo uno podemos pasar de él. ahora recuerdo un anécdota con seis.... ¿Quieres que te la cuente? Vale, pues estábamos con Seis, Sam, Siete, Sarah y Adam en las cataratas dl niágara, donde conocimos a unos TAL, Terríciolas Aquejados por Legados, que qué son los legados, pues te lo voy a resumir:un legado es como un superpoder. un ejemplo, el Lumen, el lumen es el legado que te permite iluminar los caminos oscuros. entonces llegó el Anubis una nave alienígena que transporta a todo el ejército de Sétrakus Ra. Los TAL se asustaron y fueron a nuestra nave.", DialogLayout.Bottom)
    tiles.placeOnTile(cuatro, tiles.getTileLocation(17, 1))
})
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    animation.runImageAnimation(
    cuatro,
    [img`
        . . . . . . . . . . . . . 
        . . . f f f f f f . . . . 
        . f f f f f f f f f . . . 
        . f f f f f f c f f f . . 
        f f f f c f f f c f f f . 
        f c f f c c f f f c c f f 
        f c c f f f f e f f f f f 
        f f f f f f f e e f f f . 
        f f e e f b f e e f f f . 
        f f e 4 e 1 f 4 4 f f . . 
        . f f f e 4 4 4 4 f . . . 
        . 4 4 4 e e e e f f . . . 
        . e 4 4 e 7 7 7 7 f . . . 
        . f e e f 6 6 6 6 f f . . 
        . f f f f f f f f f f . . 
        . . f f . . . f f f . . . 
        `,img`
        . . . . . . . . . . . . . 
        . . . f f f f f f . . . . 
        . f f f f f f f f f . . . 
        . f f f f f f c f f f . . 
        f f f f c f f f c f f f . 
        f c f f c c f f f c c f f 
        f c c f f f f e f f f f f 
        f f f f f f f e e f f f . 
        f f e e f b f e e f f . . 
        . f e 4 e 1 f 4 4 f f . . 
        . f f f e e 4 4 4 f . . . 
        . . f e 4 4 e e f f . . . 
        . . f e 4 4 e 7 7 f . . . 
        . f f f e e f 6 6 f f . . 
        . f f f f f f f f f f . . 
        . . f f . . . f f f . . . 
        `,img`
        . . . f f f f f . . . . . 
        . f f f f f f f f f . . . 
        . f f f f f f c f f f . . 
        f f f f c f f f c f f . . 
        f c f f c c f f f c c f f 
        f c c f f f f e f f f f f 
        f f f f f f f e e f f f . 
        f f e e f b f e e f f . . 
        . f e 4 e 1 f 4 4 f . . . 
        . f f f e 4 4 4 4 f . . . 
        . . f e e e e e f f . . . 
        . . e 4 4 e 7 7 7 f . . . 
        . . e 4 4 e 7 7 7 f . . . 
        . . f e e f 6 6 6 f . . . 
        . . . f f f f f f . . . . 
        . . . . f f f . . . . . . 
        `],
    100,
    true
    )
})
controller.up.onEvent(ControllerButtonEvent.Released, function () {
    Dreynen = sprites.createProjectileFromSprite(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . 9 . 9 . . 9 . . . . . . . 
        . 9 . . . . . . . 9 . . . . . . 
        . . 9 f f f f f f . 9 . . . . . 
        . . . f f f f . . . 9 . . . . . 
        . . 9 . . . . 9 . 9 . . . . . . 
        . . . . 9 . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, cuatro, 50, 0)
})
sprites.onOverlap(SpriteKind.interactua, SpriteKind.Player, function (sprite, otherSprite) {
    game.showLongText("oye, me han chivado de que los Mogadorianos tienen un líder llamado Sétrakus Ra, quizás sea ese el punto debil de los Mogos que estáis buscando", DialogLayout.Bottom)
    tiles.placeOnTile(cuatro, tiles.getTileLocation(19, 1))
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.invisible2, function (sprite, otherSprite) {
    game.showLongText("aquí está Sétrakus Ra. Este chico tiene una historia... buff no sé si podré contartela, bueno sí te la cuento, este Sétrakus Ra era un Lórico, una persona muy influyente en Lorien, hasta que un día se le metió la idea en la cabeza de que los Lóricos debían gobernar el planeta, porque antes Lorien era un paneta independiente, que no necesitaba unoa ayudantes. Así que fué a decirselo a su amigo Pittacus. A Pittacus no le pareció bien, así que Sétrakus y él se distanciaron. A los poco años de la marcha de sétrakus llegó a los oídos de Pittacus que había llegado un Líder Mogadoriano. llamado Sétrakus Ra. deste ese entonces Lorien está en guerra con Mogador y la guerra no parará hasta que uno de los dos gane. así es, Sétrakus Ra fué un Loriano", DialogLayout.Bottom)
})
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.enemysuperpoweroso, function (sprite, otherSprite) {
    sétrakus_ra_vidas += -2
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    info.changeLifeBy(-1)
    cuatro.setPosition(10, 60)
})
let Has_ganado: Sprite = null
let Diez: Sprite = null
let Siete: Sprite = null
let Cinco: Sprite = null
let Sétrakus_Ra: Sprite = null
let transmisor: Sprite = null
let habla_1: Sprite = null
let enemigo_2: Sprite = null
let sétrakus_ra_vidas = 0
let Dreynen: Sprite = null
let lumen: Sprite = null
let cuatro: Sprite = null
cuatro = sprites.create(img`
    . . . . . . . . . . . . . 
    . . . f f f f f f . . . . 
    . f f f f f f f f f . . . 
    . f f f f f f c f f f . . 
    f f f f c f f f c f f f . 
    f c f f c c f f f c c f f 
    f c c f f f f e f f f f f 
    f f f f f f f e e f f f . 
    f f e e f b f e e f f . . 
    . f e 4 e 1 f 4 4 f f . . 
    . f f f e e 4 4 4 f . . . 
    . . f e 4 4 e e f f . . . 
    . . f e 4 4 e 7 7 f . . . 
    . f f f e e f 6 6 f f . . 
    . f f f f f f f f f f . . 
    . . f f . . . f f f . . . 
    `, SpriteKind.Player)
controller.moveSprite(cuatro, 100, 0)
scene.setBackgroundColor(10)
tiles.setTilemap(tilemap`level1`)
cuatro.setPosition(10, 60)
scene.cameraFollowSprite(cuatro)
cuatro.ay += 300
game.showLongText("hola, me llamo cuatro, pero todos me llaman John, he acudido a vosotros, humanos para que me ayudéis a derrotar a los Mogadorianos, unos monstruos con un aspecto blanquecino que mataron a mi pueblo, y planean matar al vuestro, mientras, ahora te contaré el resumen del libro. Un día unos chicos están una casa-ático que está llena de aparatejos,¡Somos nosotros, uno de ellos soy yo! Estoy entrenando mi lumen para enfrentarme al Gran Líder. Los demás están sentados charlando sobre algunas cosas que son ridículas, ahora que tenemos que salvar el mundo. Peroooo.... Ella/número diez está rara desde que la salvamos de Sétrakus Ra, qué le pasará?? Si queréis saberlo no dudéis en leeros el libro, ¡Os gustará!    . Ahora os enseñaré los controles. para moverte pulsa la tecla derecha, o la izquierda según la dirección en la que vayas y para saltar pulsa la tecla espacio. ¡Cuidado con la lava y con los enemigos! por cada nivel subirás una vida. Por el camino iré desbloqueando poderes, que tú me ayudarás a usar. confío en tí humano.", DialogLayout.Top)
info.setLife(1)
game.onUpdate(function () {
    if (cuatro.tileKindAt(TileDirection.Bottom, sprites.dungeon.hazardLava1)) {
        info.changeLifeBy(-1)
        cuatro.setPosition(24, 27)
    }
    if (cuatro.tileKindAt(TileDirection.Right, sprites.dungeon.doorClosedEast)) {
        info.changeLifeBy(1)
        tiles.setTilemap(tilemap`level2`)
        cuatro.setPosition(24, 27)
    }
    if (cuatro.tileKindAt(TileDirection.Right, sprites.dungeon.chestClosed)) {
        info.changeLifeBy(1)
        tiles.setTilemap(tilemap`level4`)
        cuatro.setPosition(10, 60)
        enemigo_2 = sprites.create(img`
            ..............ffffff....
            .............f2feeeeff..
            ............f222feeeeff.
            .......cc...feeeeffeeef.
            .......cdc.fe2222eeffff.
            .......cddcf2effff222ef.
            ........cddcffeeefffffff
            .........cddce44fbe44eff
            ..........cdceddf14d4eef
            ..........cccdeddd4eeef.
            ...........edd4e44eeff..
            ............ee442222f...
            .............f2e2222f...
            .............f554444f...
            ..............ffffff....
            ................fff.....
            ........................
            ........................
            ........................
            ........................
            ........................
            ........................
            ........................
            ........................
            `, SpriteKind.Enemy)
        tiles.placeOnTile(enemigo_2, tiles.getTileLocation(42, 4))
        habla_1 = sprites.create(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . 3 . . . . . . . 
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
            `, SpriteKind.invisible)
        tiles.placeOnTile(habla_1, tiles.getTileLocation(16, 1))
        transmisor = sprites.create(img`
            ........................
            ........................
            ........................
            ........................
            ..........ffff..........
            ........ff1111ff........
            .......fb111111bf.......
            .......f11111111f.......
            ......fd11111111df......
            ......fd11111111df......
            ......fddd1111dddf......
            ......fbdbfddfbdbf......
            ......fcdcf11fcdcf......
            .......fb111111bf.......
            ......fffcdb1bdffff.....
            ....fc111cbfbfc111cf....
            ....f1b1b1ffff1b1b1f....
            ....fbfbffffffbfbfbf....
            .........ffffff.........
            ...........fff..........
            ........................
            ........................
            ........................
            ........................
            `, SpriteKind.interactua)
        tiles.placeOnTile(transmisor, tiles.getTileLocation(18, 1))
    }
    if (cuatro.tileKindAt(TileDirection.Right, sprites.dungeon.chestOpen)) {
        tiles.setTilemap(tilemap`level5`)
        tiles.placeOnTile(cuatro, tiles.getTileLocation(1, 12))
        habla_1 = sprites.create(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . 3 . . . . . . . . . 
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
            `, SpriteKind.invisible2)
        Sétrakus_Ra = sprites.create(img`
            . . . . c c c f c . . . . . . . 
            . . c c 5 5 f 5 5 c . . . . . . 
            . c 5 5 5 f 1 f 5 5 c . . . . . 
            c 5 5 5 f 5 f f 5 5 5 c . . . . 
            c 5 5 5 5 5 5 5 5 5 5 5 c . . . 
            c c b b 1 b f 5 f 5 f 5 c . . . 
            c 5 f f f 5 f f f f f f d c . . 
            c 5 5 5 5 5 f 5 f 5 f d d c . . 
            . c 5 5 5 5 b 5 5 f d d d c . . 
            . . c b b c 5 5 b d f d f c . . 
            . c b b c 5 5 b b d d f d c c c 
            f c c c c c c d d d f d f d f c 
            . f . . c c b 5 5 b d d d f c . 
            . . . . c d 5 5 b b c c f . . . 
            . . . . c c c c c c c . . . . . 
            . . . . c b b b c . . . . . . . 
            `, SpriteKind.enemysuperpoweroso)
        tiles.placeOnTile(Sétrakus_Ra, tiles.getTileLocation(50, 13))
        sétrakus_ra_vidas = 60
        Sétrakus_Ra.follow(cuatro)
    }
    if (cuatro.tileKindAt(TileDirection.Right, sprites.dungeon.collectibleRedCrystal)) {
        info.setLife(6)
        if (sétrakus_ra_vidas == 0) {
            Sétrakus_Ra.destroy()
            tiles.setTilemap(tilemap`level6`)
            Cinco = sprites.create(img`
                . . . . . 5 5 5 5 5 . . . 
                . . . 5 5 5 5 5 5 5 5 5 . 
                . . 5 5 5 c 5 5 5 5 5 5 . 
                . . 5 5 c 5 5 5 c 5 5 5 5 
                5 5 c c 5 5 5 c c 5 5 c 5 
                5 5 5 5 5 e f f f f c c 5 
                . 5 5 f e e f f f f f f 5 
                . . . f e e f b f e e f 5 
                . . . f 4 4 f 1 e 4 e f . 
                . . . f 4 4 4 4 e f f f . 
                . . . f f e e e e e f . . 
                . . . f 9 9 9 e 4 4 e . . 
                . . . f 9 9 9 e 4 4 e . . 
                . . . f b b b f e e f . . 
                . . . . f f f f f f . . . 
                . . . . . . f f f . . . . 
                `, SpriteKind.amigos)
            Siete = sprites.create(img`
                . . . . . . . . . . . . . . . . 
                . . . f 4 4 f f f f . . . . . . 
                . . f 4 5 5 4 5 f b f f . . . . 
                . . f 5 5 5 5 4 e 3 3 b f . . . 
                . . f e 4 4 4 e 3 3 3 3 b f . . 
                . f 3 3 3 3 3 3 3 3 3 3 3 f . . 
                . f 3 3 e e 3 b e 3 3 3 3 f . . 
                . f 3 3 e e e f f 3 3 3 3 f . . 
                . . f e e e f b f b b b b f f . 
                . . . e 4 4 f 1 e b b b b b f . 
                . . . f 4 4 4 4 f b b b b b f . 
                . . . f d d d e 4 4 b b b f . . 
                . . . f d d d e 4 4 f f f . . . 
                . . f d d d b b e e b b f . . . 
                . . f b d 1 d 1 d d b f . . . . 
                . . . f f f b b f f f . . . . . 
                `, SpriteKind.amigos)
            Diez = sprites.create(img`
                . . . . . . . . . . . . . . 
                . . . f f f c c c . . . . . 
                . f f 5 5 5 5 5 5 f f . . . 
                . f 5 5 5 5 5 5 5 5 5 f . . 
                f 5 5 5 5 5 5 5 5 5 5 5 c . 
                f 5 5 b d 5 5 5 5 5 5 5 5 c 
                f 5 d 4 4 b 5 5 5 5 5 5 5 f 
                f 5 b 4 4 4 c c 5 5 5 5 5 f 
                . f f 4 4 c b c b 5 5 5 b f 
                . . f d d c 1 e b b b b b c 
                . . c d d d d e e b b b b c 
                . . c 4 4 4 e d d 4 b b c . 
                . . c 9 9 9 e d d e c c . . 
                . c b b b b b e e b b c . . 
                . c 3 b 3 b 3 3 3 b c . . . 
                . . c c c b b c c c . . . . 
                `, SpriteKind.amigos)
            Has_ganado = sprites.create(img`
                ................................
                ................................
                .........88.....................
                ..8.8.8.8.......................
                ..8888.8.8......................
                ..8.8888..8.....................
                ..8.88.888......................
                ................................
                ..88...8.8..8.8.88..88..........
                .8....8.888.88.88.88..8.........
                .8..888888.888888.88..8.........
                .8...88.88..88.88.88..8.........
                ..888.8.88..88.888..88..........
                ................................
                ................................
                ................................
                `, SpriteKind.Player)
            tiles.placeOnTile(Cinco, tiles.getTileLocation(24, 11))
            tiles.placeOnTile(Has_ganado, tiles.getTileLocation(10, 2))
            tiles.placeOnTile(Diez, tiles.getTileLocation(25, 11))
            tiles.placeOnTile(Siete, tiles.getTileLocation(26, 11))
        }
    }
})
