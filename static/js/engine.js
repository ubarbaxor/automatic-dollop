const gameLoop = game => {
  game.obstacles.forEach(obj => {
    obj.position.z += 0.016
    obj.rotation.y += -Math.PI / 128
  })
}

const animate = _ => {
  const {
    game: {
      scene,
      camera,
      renderer
    }
  } = window

  window.requestAnimationFrame(animate)

  gameLoop(window.game)

  renderer.render(scene, camera)
}

animate()
