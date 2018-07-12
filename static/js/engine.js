window.game.controls = new THREE.OrbitControls(window.game.camera)

window.game.loop = game => {
  const obstacleRotation = {
    angle: Math.PI / 128,
    axis: new Three.Vector3(0, 1, 0)
  }
  const rotation = new THREE.Quaternion();
  rotation.setFromAxisAngle( obstacleRotation.axis, obstacleRotation.angle )
  game.obstacles.forEach(obj => {
    obj.position.z += 0.008
  //   obj.rotation.y += -Math.PI / 128
  // Nope, use quaternion rotations
    // console.log(obj, obj.quaternion)
    // obj.quaternion.applyQuaternion( rotation )
  })
  window.game.controls.target = game.obstacles[0].position
}

const animate = _ => {
  const {
    game: {
      controls,
      // camera,
      loop,
      // renderer,
      // scene,
      // obstacles
    }
  } = window

  window.requestAnimationFrame(animate)

  controls.update()
  loop(game)
  renderer.render(scene, camera)
}

animate()
