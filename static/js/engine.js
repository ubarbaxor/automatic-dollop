window.game.controls = new THREE.OrbitControls(window.game.camera)

const animate = _ => {
  const {
    game: {
      scene,
      camera,
      controls,
      renderer
    }
  } = window

  window.requestAnimationFrame(animate)

  controls.update()
  renderer.render(scene, camera)
}

animate()
