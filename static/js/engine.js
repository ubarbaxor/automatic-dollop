const animate = _ => {
  const {
    game: {
      scene,
      camera,
      renderer
    }
  } = window

  window.requestAnimationFrame(animate)

  renderer.render(scene, camera)
}

animate()
