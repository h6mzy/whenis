<script lang="ts">
import { onMount } from "svelte"

let game

onMount(async () => {

  const Phaser = (await import("phaser")).default

  const config = {
    type: Phaser.AUTO,
    width: 800,
    height: 500,
    parent: "game",
    physics: {
      default: "arcade"
    },
    scene: {
      preload,
      create,
      update
    }
  }

  game = new Phaser.Game(config)

  let player
  let cursors

  function preload() {
    this.load.image("room", "/room.png")
    this.load.image("avatar", "/avatar.png")
    this.load.image("door", "/door.png")
  }

  function create() {
    this.add.image(400, 250, "room")

    player = this.physics.add.sprite(400, 350, "avatar")

    const door = this.physics.add.sprite(700, 300, "door")

    door.setInteractive()

    door.on("pointerdown", () => {
      window.location.href = "/manager"
    })

    cursors = this.input.keyboard.createCursorKeys()
  }

  function update() {
    player.setVelocity(0)

    if (cursors.left.isDown) player.setVelocityX(-200)
    if (cursors.right.isDown) player.setVelocityX(200)
    if (cursors.up.isDown) player.setVelocityY(-200)
    if (cursors.down.isDown) player.setVelocityY(200)
  }

})
</script>

<div id="game"></div>